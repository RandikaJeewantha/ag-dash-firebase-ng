import { Component, Optional, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, empty } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//export interface Temp { value: string; };

@Component({
  selector: 'app-m-essentials-modify',
  templateUrl: './m-essentials-modify.component.html',
  styleUrls: ['./m-essentials-modify.component.scss']
})
export class MEssentialsModifyComponent {

  // plant: string;

  // private tempDoc: AngularFirestoreDocument<Temp>;
  // temp: Observable<Temp>;

  // hum: number;
  // ph: number;
  // ec: number;
  // height: number;
  // light: number;

  // temperature = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  // humidity = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  // ec_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  // ph_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  // light_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  // height_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);

  // PlantSelected(event: any) {
  //   this.plant = event.value;
  // }

  // getErrorMessageec() {
  //   return this.ec_value.hasError('required') ? 'You must enter a value' :
  //     this.ec_value.hasError('pattern') ? 'Not a valid number' : '';
  // }

  // getErrorMessagetemperature() {
  //   return this.temperature.hasError('required') ? 'You must enter a value' :
  //     this.temperature.hasError('pattern') ? 'Not a valid number' : '';
  // }

  // getErrorMessagehumidity() {
  //   return this.humidity.hasError('required') ? 'You must enter a value' :
  //     this.humidity.hasError('pattern') ? 'Not a valid number' : '';
  // }

  // getErrorMessageheight() {
  //   return this.height_value.hasError('required') ? 'You must enter a value' :
  //     this.height_value.hasError('pattern') ? 'Not a valid number' : '';
  // }

  // getErrorMessagelight() {
  //   return this.light_value.hasError('required') ? 'You must enter a value' :
  //     this.light_value.hasError('pattern') ? 'Not a valid number' : '';
  // }

  // getErrorMessageph() {
  //   return this.ph_value.hasError('required') ? 'You must enter a value' :
  //     this.ph_value.hasError('pattern') ? 'Not a valid number' : '';
  // }

  // constructor(public fs: AngularFirestore) {

  //   this.tempDoc = fs.doc<Temp>('essentials/'+this.plant+'Temperature');
  //   this.temp = this.tempDoc.valueChanges();

  //  }

  // Temperature(value: string) {

  //   if (this.plant == undefined){
  //     alert("Plant is not selected ! \n Please select one.")
  //   }
  //   else if (!(this.temperature.hasError('required') || this.temperature.hasError('pattern'))) {
  //     return new Promise<any>((resolve, reject) => {
  //       this.fs
  //         .collection("essentials")
  //         .doc(this.plant)
  //         .update({ Temperature: value })
  //         .then(res => alert("successfully updaded " + this.plant + " Temperature count as :  " + value), err => reject(err));
  //     });
  //   }
  //   else {
  //     alert("Not a valid number !");
  //   }
  // }

  // Humidity(value: string) {

  //   if (this.plant == undefined){
  //     alert("Plant is not selected ! \n Please select one.")
  //   }
  //   else if (!(this.humidity.hasError('required') || this.humidity.hasError('pattern'))) {
  //     return new Promise<any>((resolve, reject) => {
  //       this.fs
  //         .collection("essentials")
  //         .doc(this.plant)
  //         .update({ Humidity: value })
  //         .then(res => alert("successfully updaded " + this.plant + " Humidity count as :  " + value), err => reject(err));
  //     });
  //   }
  //   else {
  //     alert("Not a valid number !");
  //   }
  // }

  // EC(value: string) {

  //   if (this.plant == undefined){
  //     alert("Plant is not selected ! \n Please select one.")
  //   }
  //   else if (!(this.ec_value.hasError('required') || this.ec_value.hasError('pattern'))) {
  //     return new Promise<any>((resolve, reject) => {
  //       this.fs
  //         .collection("essentials")
  //         .doc(this.plant)
  //         .update({ EC: value })
  //         .then(res => alert("successfully updaded " + this.plant + " EC value as :  " + value), err => reject(err));
  //     });
  //   }
  //   else {
  //     alert("Not a valid number !");
  //   }
  // }

  // PH(value: string) {

  //   if (this.plant == undefined){
  //     alert("Plant is not selected ! \n Please select one.")
  //   }
  //   else if (!(this.ph_value.hasError('required') || this.ph_value.hasError('pattern'))) {
  //     return new Promise<any>((resolve, reject) => {
  //       this.fs
  //         .collection("essentials")
  //         .doc(this.plant)
  //         .update({ PH: value })
  //         .then(res => alert("successfully updaded " + this.plant + " PH count as :  " + value), err => reject(err));
  //     });
  //   }
  //   else {
  //     alert("Not a valid number !");
  //   }
  // }

  // Light(value: string) {

  //   if (this.plant == undefined){
  //     alert("Plant is not selected ! \n Please select one.")
  //   }
  //   else if (!(this.light_value.hasError('required') || this.light_value.hasError('pattern'))) {
  //     return new Promise<any>((resolve, reject) => {
  //       this.fs
  //         .collection("essentials")
  //         .doc(this.plant)
  //         .update({ Light: value })
  //         .then(res => alert("successfully updaded " + this.plant + " Light count as :  " + value), err => reject(err));
  //     });
  //   }
  //   else {
  //     alert("Not a valid number !");
  //   }
  // }

  // Height(value: string) {

  //   if (this.plant == undefined){
  //     alert("Plant is not selected ! \n Please select one.")
  //   }
  //   else if (!(this.height_value.hasError('required') || this.height_value.hasError('pattern'))) {
  //     return new Promise<any>((resolve, reject) => {
  //       this.fs
  //         .collection("essentials")
  //         .doc(this.plant)
  //         .update({ Height: value })
  //         .then(res => alert("successfully updaded " + this.plant + " Height value as :  " + value), err => reject(err));
  //     });
  //   }
  //   else {
  //     alert("Not a valid number !");
  //   }
  // }

  minDate: Date;
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

  constructor(public fs: AngularFirestore, public dialogRef: MatDialogRef<MEssentialsModifyComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    this.Data = data.Data;
    this.plant = data.plant;

    console.log(this.Data);

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

    if (tem !== undefined) {
      this.Temperature = tem;
    }

    if (hum !== undefined) {
      this.Humidity = hum;
    }

    if (ec !== undefined) {
      this.EC_Value = ec;
    }

    if (ph !== undefined) {
      this.PH_Value = ph;
    }

    if (light !== undefined) {
      this.Light = light;
    }

    if (height !== undefined) {
      this.Height = height;
    }

    return new Promise<any>((resolve, reject) => {
      this.fs
        .collection(this.plant)
        .doc(this.Start_Date)
        .update({
          End_Date: this.End_Date,
          Height: this.Height,
          Temperature: this.Temperature,
          Humidity: this.Humidity,
          EC_Value: this.EC_Value,
          PH_Value: this.PH_Value,
          Light: this.Light

        })
        .then(res => alert("successfully updaded !"), err => reject(err));
    });

  }

  // create(tem: any, hum: any, ec: any, ph: any, light: any, height: any) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.fs
  //       .collection(this.plant)
  //       .doc(this.start_date)
  //       .set({
  //         Start_Date: this.start_date,
  //         End_Date: this.end_date,
  //         Height: height,
  //         Temperature: tem,
  //         Humidity: hum,
  //         EC: ec,
  //         PH: ph,
  //         Light: light
  //       })
  //       .then(res => alert("successfully added !"), err => reject(err));
  //   });
  // }

  // startdate(value: any) {
  //   this.start_date = value.toString().substring(4, 15);
  //   this.minDate = new Date(value);
  // }

  enddate(value: any) {
    this.end_date = value.toString().substring(4, 15);
  }

}
