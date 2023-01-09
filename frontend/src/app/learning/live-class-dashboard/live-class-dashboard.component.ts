import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AgoraRTCService } from 'src/app/services/agoraRTC.service';

@Component({
  selector: 'app-live-class-dashboard',
  templateUrl: './live-class-dashboard.component.html',
  styleUrls: ['./live-class-dashboard.component.css'],
})
export class LiveClassDashboardComponent implements OnInit {
  constructor(private renderer: Renderer2, private agoraRTC: AgoraRTCService) {}
  @ViewChild('div') div: ElementRef = this.renderer.createElement('div');
  ngOnInit(): void {
    this.agoraRTC.startBasicCall();
  }
  hour = 0;
  minutes = 0;
  seconds = 0;
  leadingZero = true;
  async goLive() {
    await this.agoraRTC.hostIsChecked();
    await this.agoraRTC.joinBtnClicked();
    this.renderer.appendChild(
      this.div.nativeElement,
      this.agoraRTC.localPlayerContainer
    );
    this.startTimer();
  }
  join() {
    this.agoraRTC.audienceIsChecked();
    this.agoraRTC.joinBtnClicked();
    this.renderer.appendChild(
      this.div.nativeElement,
      this.agoraRTC.remotePlayerContainer
    );
  }
  leave() {
    this.agoraRTC.leaveBtnClicked();
  }
  startTimer() {
    setInterval(() => {
      if (this.seconds < 60) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.minutes++;
      }
      if (this.minutes == 60) {
        this.hour++;
        this.minutes = 0;
      }
    }, 1000);
  }
}
