import { Component, Inject, OnInit } from '@angular/core';
import { ref } from '@angular/fire/storage';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { deleteObject, getStorage } from 'firebase/storage';
import { CourseDetails } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  courses?: CourseDetails[];
  courseImageStaticPath = './../../../../../../backend/uploads/image/';
  ngOnInit(): void {
    this.coursesService.getCourses(1).subscribe((res) => {
      this.courses = res;
      console.log(this.courses);
    });
  }

  public refetchCourses() {
    this.coursesService.getCourses(1).subscribe((res) => {
      this.courses = res;
      console.log(this.courses);
    });
  }

  goToCourse(id: number) {
    this.router.navigateByUrl(`faculty-dashboard/course/${id}`);
  }
  deleteCourseDialog(courseId: number, name: string, image: string) {
    const dialogRef = this.dialog.open(DeleteCourseDialog, {
      data: { id: courseId, title: name, image },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.refetchCourses();
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './delete-course-dialog.html',
  styleUrls: ['./delete-course-dialog.css'],
})
export class DeleteCourseDialog {
  constructor(
    public dialogRef: MatDialogRef<DeleteCourseDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: { id: number; title: string; image: string },
    private coursesService: CoursesService
  ) {}
  toBeDeleteCourseTitle = this.data.title;

  async deleteCourse() {
    console.log('lllllllllll', this.data.image);
    // const storage = getStorage();
    // const deleteRef = ref(storage, this.data.image);
    // if (deleteRef) {
    //   await deleteObject(deleteRef);
    // }
    this.coursesService.deleteCourse(this.data.id);
    this.dialogRef.close();
  }
  closeDialog() {
    console.log('close');
    this.dialogRef.close();
  }
}
