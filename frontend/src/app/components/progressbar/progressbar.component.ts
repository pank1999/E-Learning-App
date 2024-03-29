import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
})
export class ProgressbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  progressBarWidth: string = '160px';
  @Input()
  progress: string = '50%';
}
