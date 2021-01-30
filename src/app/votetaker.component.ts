import { Component } from "@angular/core";

@Component({
  selector: "app-vote-taker",
  template: `
    <h2>父模组订阅子模组事件，可带参数</h2>
    <h3>Agree: {{ agreed }}</h3>
    <h3>Disagree: {{ disagreed }}</h3>
    <h5>以下为子模组内容</h5>
    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)"
    >
    </app-voter>
  `
})
export class VoteTakerComponent {
  agreed: string = "";
  disagreed: string = "";
  voters = ["Narco", "Celeritas", "Bombasto"];

  onVoted(agreed: any) {
    if (agreed.isAgreed)
      this.agreed = this.agreed
        .concat(this.agreed == "" ? "" : ",")
        .concat(agreed.name);
    else this.disagreed = this.disagreed.concat(...[agreed.name, ","]);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
