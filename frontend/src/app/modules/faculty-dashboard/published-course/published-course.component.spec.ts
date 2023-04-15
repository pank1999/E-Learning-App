import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedCourseComponent } from './published-course.component';

describe('PublishedCourseComponent', () => {
  let component: PublishedCourseComponent;
  let fixture: ComponentFixture<PublishedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
