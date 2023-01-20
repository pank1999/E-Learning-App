import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courseForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    author: new FormControl(),
    fees: new FormControl(),
    img: new FormControl(),
  });

  onSubmit(form: any) {
    console.log(form.value);
  }
}
