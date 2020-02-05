import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Temp { value: string; };

@Component({
  selector: 'app-m-essentials-card',
  templateUrl: './m-essentials-card.component.html',
  styleUrls: ['./m-essentials-card.component.scss']
})
export class MEssentialsCardComponent {

  plant: string;

  private tempDoc: AngularFirestoreDocument<Temp>;
  temp: Observable<Temp>;

  hum: number;
  ph: number;
  ec: number;
  height: number;
  light: number;

  temperature = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  humidity = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  ec_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  ph_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  light_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  height_value = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);

  PlantSelected(event: any) {
    this.plant = event.value;
  }

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

  constructor(public fs: AngularFirestore) {

    this.tempDoc = fs.doc<Temp>('essentials/'+this.plant+'Temperature');
    this.temp = this.tempDoc.valueChanges();

   }

  Temperature(value: string) {

    if (this.plant == undefined){
      alert("Plant is not selected ! \n Please select one.")
    }
    else if (!(this.temperature.hasError('required') || this.temperature.hasError('pattern'))) {
      return new Promise<any>((resolve, reject) => {
        this.fs
          .collection("essentials")
          .doc(this.plant)
          .update({ Temperature: value })
          .then(res => alert("successfully updaded " + this.plant + " Temperature count as :  " + value), err => reject(err));
      });
    }
    else {
      alert("Not a valid number !");
    }
  }

  Humidity(value: string) {

    if (this.plant == undefined){
      alert("Plant is not selected ! \n Please select one.")
    }
    else if (!(this.humidity.hasError('required') || this.humidity.hasError('pattern'))) {
      return new Promise<any>((resolve, reject) => {
        this.fs
          .collection("essentials")
          .doc(this.plant)
          .update({ Humidity: value })
          .then(res => alert("successfully updaded " + this.plant + " Humidity count as :  " + value), err => reject(err));
      });
    }
    else {
      alert("Not a valid number !");
    }
  }

  EC(value: string) {

    if (this.plant == undefined){
      alert("Plant is not selected ! \n Please select one.")
    }
    else if (!(this.ec_value.hasError('required') || this.ec_value.hasError('pattern'))) {
      return new Promise<any>((resolve, reject) => {
        this.fs
          .collection("essentials")
          .doc(this.plant)
          .update({ EC: value })
          .then(res => alert("successfully updaded " + this.plant + " EC value as :  " + value), err => reject(err));
      });
    }
    else {
      alert("Not a valid number !");
    }
  }

  PH(value: string) {

    if (this.plant == undefined){
      alert("Plant is not selected ! \n Please select one.")
    }
    else if (!(this.ph_value.hasError('required') || this.ph_value.hasError('pattern'))) {
      return new Promise<any>((resolve, reject) => {
        this.fs
          .collection("essentials")
          .doc(this.plant)
          .update({ PH: value })
          .then(res => alert("successfully updaded " + this.plant + " PH count as :  " + value), err => reject(err));
      });
    }
    else {
      alert("Not a valid number !");
    }
  }

  Light(value: string) {

    if (this.plant == undefined){
      alert("Plant is not selected ! \n Please select one.")
    }
    else if (!(this.light_value.hasError('required') || this.light_value.hasError('pattern'))) {
      return new Promise<any>((resolve, reject) => {
        this.fs
          .collection("essentials")
          .doc(this.plant)
          .update({ Light: value })
          .then(res => alert("successfully updaded " + this.plant + " Light count as :  " + value), err => reject(err));
      });
    }
    else {
      alert("Not a valid number !");
    }
  }

  Height(value: string) {

    if (this.plant == undefined){
      alert("Plant is not selected ! \n Please select one.")
    }
    else if (!(this.height_value.hasError('required') || this.height_value.hasError('pattern'))) {
      return new Promise<any>((resolve, reject) => {
        this.fs
          .collection("essentials")
          .doc(this.plant)
          .update({ Height: value })
          .then(res => alert("successfully updaded " + this.plant + " Height value as :  " + value), err => reject(err));
      });
    }
    else {
      alert("Not a valid number !");
    }
  }

}