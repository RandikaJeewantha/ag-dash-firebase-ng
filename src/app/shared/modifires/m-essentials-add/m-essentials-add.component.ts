import { Component, Optional, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-m-essentials-add',
  templateUrl: './m-essentials-add.component.html',
  styleUrls: ['./m-essentials-add.component.scss']
})
export class MEssentialsAddComponent {

  temperature = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  humidity = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  ec_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  ph_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  light_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);
  height_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,3})?$")]);

  getErrorMessageec() {
    return this.ec_value.hasError('required') ? 'You must enter a value' :
      this.ec_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagetemperature() {
    return this.temperature.hasError('required') ? 'You must enter a value' :
      this.temperature.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagehumidity() {
    return this.humidity.hasError('required') ? 'You must enter a value' :
      this.humidity.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessageheight() {
    return this.height_value.hasError('required') ? 'You must enter a value' :
      this.height_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagelight() {
    return this.light_value.hasError('required') ? 'You must enter a value' :
      this.light_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessageph() {
    return this.ph_value.hasError('required') ? 'You must enter a value' :
      this.ph_value.hasError('pattern') ? 'Not a valid number' : '';
  }

  dateTime: string;
  plant: string;
  Start_Date: string;
  End_Date: any;
  
  constructor(private datePipe: DatePipe, public fs: AngularFirestore, public dialogRef: MatDialogRef<MEssentialsAddComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    this.plant = data.plant;
  }

  create(tem: any, hum: any, ec: any, ph: any, light: any, height: any) {

    if (this.Start_Date == null) {
      swal("Bad Job!", "Start Date is empty !", "error");
    }

    if (this.End_Date == null) {
      swal("Bad Job!", "End Date is empty !", "error");
    }

    if (this.Start_Date > this.End_Date) {
      swal("Bad Job!", "End Date should be the next days of the Start Date. !", "error");
    }

    this.dateTime = this.datePipe.transform(new Date().toString(), 'yyyyMMdd-HHmmss');

    if (!(this.temperature.hasError('pattern') || this.humidity.hasError('pattern') || this.ec_value.hasError('pattern') ||
      this.ph_value.hasError('pattern') || this.light_value.hasError('pattern') || this.height_value.hasError('pattern')

      || this.temperature.hasError('required') || this.humidity.hasError('required') || this.ec_value.hasError('required') ||
      this.ph_value.hasError('required') || this.light_value.hasError('required') || this.height_value.hasError('required')
      
      || this.Start_Date == null || this.End_Date == null || this.Start_Date > this.End_Date )) {

      return new Promise<any>((resolve, reject) => {
        this.fs
          .collection(this.plant)
          .doc(this.dateTime)
          .set({
            Doc_ID: this.dateTime,
            Start_Date: this.Start_Date,
            End_Date: this.End_Date,
            Height: height,
            Temperature: tem,
            Humidity: hum,
            EC_Value: ec,
            PH_Value: ph,
            Light: light
          })
          .then(() => swal("Good Job!", "You Successfully Added!", "success"), err => reject(err))
          .finally(() => this.dialogRef.close());
      });
      
    }

    else {
      swal("Bad Job!", "There are Invalid Data or Empty Data Found !", "error");
    }
    
  }

  enddate(value: any) {
    this.End_Date = this.datePipe.transform(value, 'yyyy-MM-dd');
  }

  startdate(value: any) {
    this.Start_Date = this.datePipe.transform(value, 'yyyy-MM-dd');
  }

}
