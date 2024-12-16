import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.backgroundVideo.nativeElement;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;

    video.play().catch((err) => {
      console.error('Error starting the video:', err);
    });
  }
}
