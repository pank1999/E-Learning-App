import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CourseDetails } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddVideoService } from '../services/add-video.service';
import { Video } from '../interfaces/video.interface';
import {
  Storage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from '@angular/fire/storage';
import { DeleteService } from '../services/delete.service';
import { deleteObject, getStorage } from 'firebase/storage';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    public dialog: MatDialog,
    private addVideoService: AddVideoService
  ) {}

  updateCourseForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    author: new FormControl(),
    fees: new FormControl(),
  });

  courseDetails?: CourseDetails;
  videos?: Video[];
  courseId = '';
  showUpdateButton = false;
  enableEditing = false;
  ngOnInit(): void {
    const courseId = this.router.url.split('/')[3];
    this.courseId = courseId;
    console.log({ courseId });
    this.coursesService
      .getCourseById(parseInt(courseId))
      .pipe(take(1))
      .subscribe((res) => {
        this.courseDetails = res;
        console.log({ res });
      });

    this.addVideoService
      .getAllVideos(parseInt(courseId))
      .pipe(take(1))
      .subscribe((res) => {
        this.videos = res;
        console.log('videos', this.videos);
      });
  }

  ngOnChange(courseId: string) {
    this.addVideoService
      .getAllVideos(parseInt(courseId))
      .pipe(take(1))
      .subscribe((res) => {
        this.videos = res;
        console.log('videos', this.videos);
      });
  }
  openAddVideoDialog() {
    const dialogRef = this.dialog.open(AddVideoDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.ngOnChange(this.courseId);
    });
  }

  deleteVideo(videoId: number, videoUrl: string) {
    const dialogRef = this.dialog.open(DeleteVideoDialog, {
      data: { id: videoId, videoUrl },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('navigating');
      this.ngOnChange(this.courseId);
      // this.router.navigate([`/faculty-dashboard/course/${this.courseId}`]);
    });
  }

  editDetails() {
    this.showUpdateButton = true;
    this.enableEditing = true;
  }

  updateCourseDetails(form: any) {
    console.log(this.updateCourseForm.value);
    this.showUpdateButton = false;
    const name =
      this.updateCourseForm.value.name !== null
        ? this.updateCourseForm.value.name
        : this.courseDetails?.name;
    const description =
      this.updateCourseForm.value.description !== null
        ? this.updateCourseForm.value.description
        : this.courseDetails?.description;
    const category =
      this.updateCourseForm.value.category !== null
        ? this.updateCourseForm.value.category
        : this.courseDetails?.category;
    const author =
      this.updateCourseForm.value.author !== null
        ? this.updateCourseForm.value.author
        : this.courseDetails?.author;
    const fees =
      this.updateCourseForm.value.fees !== null
        ? this.updateCourseForm.value.fees
        : this.courseDetails?.fees;

    const updatedData = { name, description, category, author, fees };
    this.coursesService.updateCourseDetails(this.courseId, updatedData);
    this.enableEditing = false;
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './add-video-dialog.html',
  styleUrls: ['./add-video-dialog.css'],
})
export class AddVideoDialog {
  constructor(
    private addVideoService: AddVideoService,
    private router: Router,
    public storage: Storage,
    public dialogRef: MatDialogRef<AddVideoDialog>
  ) {}
  file: any;
  videoSrc: string = './../../../../assets/image/upload-img-icon.jpg';

  videoForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });
  uploadedVideoUrl = '';
  progress = '10%';
  buttonStatus = 'Submit';
  bgcolor = '#FFAA05';
  afterSubmit = false;
  onFileChange(event: any) {
    const render = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.file = event.target.files[0];
      render.readAsDataURL(file);
      render.onload = () => {
        this.videoSrc = render.result as string;
      };
    }
  }

  submit(form: any) {
    console.log('i am clicked');
    console.log(form.value, this.file);
    const courseId = this.router.url.split('/')[3];
    this.afterSubmit = true;
    this.buttonStatus = 'Uploading...';
    this.bgcolor = 'lightgrey';

    console.log({ courseId });
    // dialog ref
    // adding video to firebase
    const storageRef = ref(this.storage, 'videos/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        this.progress = `${progress}%`;
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.uploadedVideoUrl = downloadURL;

          this.addVideoService.addCourseVideo(
            form.value.title,
            this.uploadedVideoUrl,
            parseInt(courseId)
          );
          this.buttonStatus = 'completed';
          this.bgcolor = 'rgb(2, 185, 124)';
          // this.dialogRef.close();
        });
      }
    );
  }
}

@Component({
  selector: 'dialog-video-dialog',
  templateUrl: './delete-video-dialog.html',
  styleUrls: ['./delete-video-dialog.css'],
})
export class DeleteVideoDialog {
  constructor(
    public dialogRef: MatDialogRef<DeleteVideoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number; videoUrl: string },
    private deleteService: DeleteService,
    public storage: Storage
  ) {}
  videoId = this.data.id;
  videoUrl = this.data.videoUrl;
  async deleteVideo() {
    const storage = getStorage();
    const deleteRef = ref(storage, this.videoUrl);
    if (deleteRef) {
      await deleteObject(deleteRef);
    }
    this.deleteService.deleteVideo(this.videoId).subscribe((res) => {
      if (res) {
        this.dialogRef.close();
      }
    });
  }
  closeVideo() {
    console.log('close');
    this.dialogRef.close();
  }
}
