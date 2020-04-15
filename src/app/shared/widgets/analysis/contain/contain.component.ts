import { Component } from '@angular/core';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.scss']
})
export class ContainComponent {

  displays: string;
  plant: string;

  constructor() {
    this.displays = "none";
  }

  searched_plant(value: string) {

    if (value == undefined) {
      this.displays = "none";
    }

    else {
      this.displays = "";
    }

  }
}
