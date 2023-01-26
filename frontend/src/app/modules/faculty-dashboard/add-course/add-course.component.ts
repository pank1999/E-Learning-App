import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddedCourseDetails } from '../interfaces/course.interface';
import { AddCourseService } from '../services/add-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor(
    private addCourseService: AddCourseService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  courseForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    author: new FormControl(),
    fees: new FormControl(),
  });

  async onSubmit(form: any) {
    console.log(form.value);
    const addedCourseDetails: AddedCourseDetails =
      await this.addCourseService.addCourse(form.value);
    this.router.navigateByUrl(
      `faculty-dashboard/add-course-image/${addedCourseDetails.id}`
    );
  }
}
