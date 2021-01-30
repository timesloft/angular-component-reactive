import { AfterViewInit, ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { CountdownTimerComponent } from "./countdown-timer.component";

//// Local variable, #timer, version
@Component({
  selector: "app-countdown-parent-lv",
  template: `
    <h3>父UI中，通过组件的Id，来访问子件的属性和方法</h3>
    <h5>{{ componentId01.name }}</h5>
    <button (click)="componentId01.start()" title="父件">Start</button>
    <button (click)="componentId01.stop()" title="父件按钮二">Stop</button>
    <div class="seconds">{{ componentId01.seconds }}</div>
    <app-countdown-timer #componentId01></app-countdown-timer>
  `,
  styleUrls: ["../assets/demo.css"]
})
export class CountdownLocalVarParentComponent {}

//// View Child version
@Component({
  selector: "app-countdown-parent-vc",
  template: `
    <h3>父组件中，通过 ViewChild 子件对象，来访问子件的属性和方法</h3>
    <h5>{{ childId.name }}</h5>
    <button (click)="start()">Start</button>
    <button (click)="stop()">Stop</button>
    <div class="seconds">{{ seconds() }}</div>
    <app-countdown-timer #childId></app-countdown-timer>
  `,
  styleUrls: ["../assets/demo.css"]
})
export class CountdownViewChildParentComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private child: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => (this.seconds = () => this.child.seconds), 0);
  }

  start() {
    this.child.start();
  }
  stop() {
    this.child.stop();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
