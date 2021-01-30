import { Component } from "@angular/core";

import { MissionService } from "./mission.service";

@Component({
  selector: "app-mission-control",
  template: `
    <h2>共享服务的方式，服务中定义交互数据，父子各自订阅所关心的数据</h2>
    <button (click)="announce()">Announce mission</button>
    <app-astronaut *ngFor="let astronaut of astronauts" [astronaut]="astronaut">
    </app-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{ event }}</li>
    </ul>
  `,
  providers: [MissionService]
})
export class MissionControlComponent {
  astronauts = ["Lovell", "Swigert", "Haise"];
  history: string[] = [];
  missions = ["Fly to the moon!", "Fly to mars!", "Fly to Vegas!"];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    //订阅该队列的消息
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      },
      null,
      () => {
        this.history.push(`!over!`);
      }
    );
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    //向该队列发消息
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
