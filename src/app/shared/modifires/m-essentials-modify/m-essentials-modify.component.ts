import { Component, Optional, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-m-essentials-modify',
  templateUrl: './m-essentials-modify.component.html',
  styleUrls: ['./m-essentials-modify.component.scss']
})
export class MEssentialsModifyComponent {

  temperature = new FormControl('', [Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  humidity = new FormControl('', [Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  ec_value = new FormControl('', [Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  ph_value = new FormControl('', [Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  light_value = new FormControl('', [Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  height_value = new FormControl('', [Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);

  getErrorMessageec() {
    return this.ec_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagetemperature() {
    return this.temperature.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagehumidity() {
    return this.humidity.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessageheight() {
    return this.height_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagelight() {
    return this.light_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessageph() {
    return this.ph_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  Data: string;
  plant: string;
  End_Date: string;
  Height: string;
  Temperature: string;
  Humidity: string;
  EC_Value: string;
  PH_Value: string;
  Light: string;
  Start_Date: string;
  Doc_ID: any;

  constructor(private datePipe: DatePipe, public fs: AngularFirestore, public dialogRef: MatDialogRef<MEssentialsModifyComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    this.Data = data.Data;
    this.plant = data.plant;

    this.Doc_ID = this.Data["Doc_ID"];
    this.Start_Date = this.Data["Start_Date"];
    this.End_Date = this.Data["End_Date"];
    this.Height = this.Data["Height"];
    this.Temperature = this.Data["Temperature"];
    this.Humidity = this.Data["Humidity"];
    this.EC_Value = this.Data["EC_Value"];
    this.PH_Value = this.Data["PH_Value"];
    this.Light = this.Data["Light"];
  }

  update(tem: any, hum: any, ec: any, ph: any, light: any, height: any) {

    if (tem != "") {
      this.Temperature = tem;
    }

    if (hum != "") {
      this.Humidity = hum;
    }

    if (ec != "") {
      this.EC_Value = ec;
    }

    if (ph != "") {
      this.PH_Value = ph;
    }

    if (light != "") {
      this.Light = light;
    }

    if (height != "") {
      this.Height = height;
    }

    if (this.Start_Date > this.End_Date) {
      swal("Bad Job!", "End Date should be the next days of the Start Date. !", "error");
    }

    if (!(this.temperature.hasError('pattern') || this.humidity.hasError('pattern') || this.ec_value.hasError('pattern') ||
    this.ph_value.hasError('pattern') || this.light_value.hasError('pattern') || this.height_value.hasError('pattern') || this.Start_Date > this.End_Date)) {
      
      return new Promise<any>((resolve, reject) => {

        this.fs
          .collection(this.plant)
          .doc(this.Doc_ID)
          .update({
            Start_Date: this.Start_Date,
            End_Date: this.End_Date,
            Height: this.Height,
            Temperature: this.Temperature,
            Humidity: this.Humidity,
            EC_Value: this.EC_Value,
            PH_Value: this.PH_Value,
            Light: this.Light

          })
          .then(() => swal("Good Job!", "You Successfully Updaded!", "success"), err => reject(err));
      });

    }
    else {
      swal("Bad Job!", "There are Invalid numbers !", "error");
    }

  }

  enddate(value: any) {
    this.End_Date = this.datePipe.transform(value, 'yyyy-MM-dd');
  }

  startdate(value: any) {
    this.Start_Date = this.datePipe.transform(value, 'yyyy-MM-dd');
  }

}
