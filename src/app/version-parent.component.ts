import { Component } from "@angular/core";

@Component({
  selector: "app-version-parent",
  template: `
    <h2>OnChanges+SimpleChanges 监听 Input 参数值的变化</h2>
    <button (click)="newMinor()">New minor version</button>
    <button (click)="newMajor()">New major version</button>
    <app-version-child
      [major]="major"
      [minor]="minor"
      [test1]="test2"
    ></app-version-child>
  `
})
export class VersionParentComponent {
  major = 1;
  minor = 23;
  test2 = "这";

  newMinor() {
    this.minor++;
    this.test2 = "这里";
  }

  newMajor() {
    this.major++;
    this.minor = 0;
    this.test2 = "这里";
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
