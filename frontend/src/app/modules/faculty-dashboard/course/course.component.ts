import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { CourseDetails } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddVideoService } from '../services/add-video.service';
import { Video } from '../interfaces/video.interface';

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
    private addVideoService:AddVideoService,
  ) {}
  courseDetails?: CourseDetails;
  videos?:Video[];
  ngOnInit(): void {
    const courseId = this.router.url.split('/')[3];
    console.log({ courseId });
    this.coursesService
      .getCourseById(parseInt(courseId))
      .pipe(take(1))
      .subscribe((res) => {
        this.courseDetails = res;
        console.log({ res });
      });

    this.addVideoService.getAllVideos(parseInt(courseId)).pipe(take(1)).subscribe(res=>{
       this.videos=res;
    })  
  }

  openAddVideoDialog() {
    const dialogRef = this.dialog.open(AddVideoDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './add-video-dialog.html',
  styleUrls: ['./add-video-dialog.css'],
})
export class AddVideoDialog {
  constructor(private addVideoService:AddVideoService, private router:Router){}
  file:any;
  videoSrc: string = './../../../../assets/image/upload-img-icon.jpg';

  videoForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

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

  submit(form:any) {
    console.log('i am clicked');
    console.log(form.value, this.file);
    const courseId = this.router.url.split('/')[3];
    console.log({ courseId });
    this.addVideoService.addVideo(form.value.title,this.file,parseInt(courseId)).subscribe((res)=>{
      if(res){
        this.router.navigateByUrl(`/faculty-dashboard/course/${courseId}`)
      }
    });
  }
}
