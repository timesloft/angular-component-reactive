import { Component } from "@angular/core";

@Component({
  selector: "app-name-parent",
  template: `
    <h2>Set/Get 方法监听参数变化 {{ names.length }} names</h2>
    
    <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
    <button (click)="change()">重新赋值，即刻绑定</button>
  `
})
export class NameParentComponent {
  // Displays 'Dr IQ', '<no name set>', 'Bombasto'
  names = ["Dr IQ", "   ", "  Bombasto  ", "张学友"];
  change() {
    this.names = this.names.concat(["王天", "黎树"]);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
