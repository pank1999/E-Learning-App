import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AddCourseImageService {
  constructor(private http: HttpClient, private router: Router) {}

  public addCourseImage(img: File, courseId: number) {
    const header = new HttpHeaders({ enctype: 'multipart/form-data' });
    const formData = new FormData();
    formData.append('img', img, img?.name);
    this.http
      .post(
        `http://localhost:3000/api/v1/course/${courseId}/add-course-img`,
        formData,
        { headers: header }
      )
      .subscribe(async (res) => {
        console.log(res);
        await this.router.navigateByUrl('faculty-dashboard/courses');
      });
  }
}
