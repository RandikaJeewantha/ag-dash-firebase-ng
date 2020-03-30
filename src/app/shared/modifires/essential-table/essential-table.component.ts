import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-essential-table',
  templateUrl: './essential-table.component.html',
  styleUrls: ['./essential-table.component.scss']
})
export class EssentialTableComponent {

  displayedColumns =
      ['position', 'Time_Duration', 'Temperature', 'Humidity', 'Electric_Conductivity', 'PH_Value', 'Light', 'Height', 'Modify', 'Delete'];
  dataSource = ELEMENT_DATA;

  temp = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  getErrorMessagetemp() {
    return this.temp.hasError('required') ? 'You must enter a value' :
      this.temp.hasError('pattern') ? 'Not a valid number' : '';
  }

}

export interface PeriodicElement {
  Time_Duration: string;
  position: number;
  Temperature: number;
  Humidity: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Time_Duration: '2020/02 - 2020/03', Temperature: 1.0079, Humidity: 'H'},
  {position: 2, Time_Duration: '2020/02 - 2020/03', Temperature: 4.0026, Humidity: 'He'},
  {position: 3, Time_Duration: '2020/02 - 2020/03', Temperature: 6.941, Humidity: 'Li'},
  {position: 4, Time_Duration: '2020/02 - 2020/03', Temperature: 9.0122, Humidity: 'Be'},
  {position: 5, Time_Duration: '2020/02 - 2020/03', Temperature: 10.811, Humidity: 'B'},
  {position: 6, Time_Duration: '2020/02 - 2020/03', Temperature: 12.0107, Humidity: 'C'}
];
