import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseImageComponent } from './add-course-image.component';

describe('AddCourseImageComponent', () => {
  let component: AddCourseImageComponent;
  let fixture: ComponentFixture<AddCourseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
