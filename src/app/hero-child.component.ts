import { Component, Input } from "@angular/core";

import { Hero } from "./hero";

@Component({
  selector: "app-hero-child",
  template: `
    <h3>{{ hero.name }} says:</h3>
    <p>我是 {{ hero.name }}, 竭诚为您服务, {{ masterName }}先生.</p>
  `
})
export class HeroChildComponent {
  @Input() hero: Hero;
  @Input("master") masterName: string; // tslint:disable-line: no-input-rename
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
