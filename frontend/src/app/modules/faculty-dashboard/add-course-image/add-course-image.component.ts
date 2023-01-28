import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCourseImageService } from '../services/add-course-image.service';
@Component({
  selector: 'app-add-course-image',
  templateUrl: './add-course-image.component.html',
  styleUrls: ['./add-course-image.component.css'],
})
export class AddCourseImageComponent implements OnInit {
  constructor(
    private addCourseImageService: AddCourseImageService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  imageSrc = './../../../../assets/image/upload-img-icon.jpg';
  file: any;
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
    this.addCourseImageService.addCourseImage(this.file, parseInt('1'));
  }
}
