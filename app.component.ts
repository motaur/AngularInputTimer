import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  hours = 0;
  minutes = 0;
  minStep = 10;
  min = 0;
  max = 10;

  upHours() {
    this.hours++;
    if (this.hours > this.max) {
      this.hours = this.max;
    }
  }

  downHours() {
    this.hours--;
    if  (this.hours < this.min) {
      this.hours = this.min;
    }
  }

  upMinutes() {
    this.minutes += this.minStep;

    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
  }

  downMinutes() {
    this.minutes -= this.minStep;

    if (this.minutes < 0) {
      this.minutes = 50;
      this.hours--;
    }

    if (this.hours < 0) {
      this.hours = 0;
    }
  }
}
