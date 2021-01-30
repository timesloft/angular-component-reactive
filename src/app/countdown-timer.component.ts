import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  template: "<p>{{message}}</p>"
})
export class CountdownTimerComponent implements OnDestroy {
  intervalId = 0;
  message = "";
  seconds = 11;
  name = "我是子件的名字";

  ngOnDestroy() {
    //销毁定时器实例，回收内存
    this.clearTimer();
  }

  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
    //销毁定时器实例，回收内存
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();

    //定时器指针
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = "Blast off!";
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }

      this.name = "我是子件的名字-".concat(this.seconds.toString());
    }, 1000);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
