import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClassDashboardComponent } from './live-class-dashboard.component';

describe('LiveClassDashboardComponent', () => {
  let component: LiveClassDashboardComponent;
  let fixture: ComponentFixture<LiveClassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveClassDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveClassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
