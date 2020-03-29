import { Component } from '@angular/core';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent {

  displays: string;

  constructor(){
    this.displays = "none";
  }

  searched_plant(value: string) {

    if (value == undefined) {
      this.displays = "none";
    }

    else {
      this.displays ="";
    }

  }

}
