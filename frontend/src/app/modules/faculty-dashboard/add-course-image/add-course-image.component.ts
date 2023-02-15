import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCourseImageService } from '../services/add-course-image.service';

import {
  Storage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from '@angular/fire/storage';

@Component({
  selector: 'app-add-course-image',
  templateUrl: './add-course-image.component.html',
  styleUrls: ['./add-course-image.component.css'],
})
export class AddCourseImageComponent implements OnInit {
  constructor(
    private addCourseImageService: AddCourseImageService,
    private router: Router,
    public storage: Storage
  ) {}

  ngOnInit(): void {}
  imageSrc = './../../../../assets/image/upload-img-icon.jpg';
  file: any;
  uploadImageUrl = '';
  onFileChange(event: any) {
    const render = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.file = event.target.files[0];
      render.readAsDataURL(file);
      render.onload = () => {
        this.imageSrc = render.result as string;
      };
    }
  }
  submit() {
    const courseId = this.router.url.split('/')[3];
    // adding video to firebase
    const storageRef = ref(this.storage, 'images/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.uploadImageUrl = downloadURL;
          this.addCourseImageService.addCourseImage(
            this.uploadImageUrl,
            parseInt(courseId)
          );
        });
      }
    );
    setTimeout(() => {
      this.router.navigate(['/faculty-dashboard/courses']);
    }, 2000);
  }
}
