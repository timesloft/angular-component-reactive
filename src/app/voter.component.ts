import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-voter",
  template: `
    <h4>{{ name }}</h4>
    <button (click)="vote({ name: name, isAgreed: true })" [disabled]="didVote">
      Agree
    </button>
    <button
      (click)="vote({ name: name, isAgreed: false })"
      [disabled]="didVote"
    >
      Disagree
    </button>
  `
})
export class VoterComponent {
  @Input() name: string;
  @Output() voted = new EventEmitter<any>();
  didVote = false;

  vote(agreed: any) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
