import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-m-essentials-card',
  templateUrl: './m-essentials-card.component.html',
  styleUrls: ['./m-essentials-card.component.scss']
})
export class MEssentialsCardComponent implements OnInit {

  // plant = new FormControl('', [Validators.required]);
  temp = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  hum = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  light = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  ph = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  ec = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  height = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);

  // getErrorMessageplant() {
  //   return this.plant.hasError('required') ? 'You must enter a value':'';
  // }

  getErrorMessagetemp() {
    return this.temp.hasError('required') ? 'You must enter a value' :
      this.temp.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagehum() {
    return this.hum.hasError('required') ? 'You must enter a value' :
      this.hum.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessagelight() {
    return this.light.hasError('required') ? 'You must enter a value' :
      this.light.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessageph() {
    return this.ph.hasError('required') ? 'You must enter a value' :
      this.ph.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessageec() {
    return this.ec.hasError('required') ? 'You must enter a value' :
      this.ec.hasError('pattern') ? 'Not a valid number' : '';
  }

  getErrorMessageheight() {
    return this.height.hasError('required') ? 'You must enter a value' :
      this.height.hasError('pattern') ? 'Not a valid number' : '';
  }

  constructor(public fs: AngularFirestore) { }

  Issentials( temp: string, hum: string, light: string, ph: string, ec: string, height: string) {

    if (!(this.temp.hasError('pattern') ||
      this.hum.hasError('pattern') || this.light.hasError('pattern') ||
      this.ph.hasError('pattern') || this.ec.hasError('pattern') ||
      this.height.hasError('pattern'))) {
      
        return new Promise<any>((resolve, reject) => {
        this.fs
          .collection("essentials")
          .doc("plants")
          .update({  
            Temperature : temp, 
            Humidity : hum,
            Light : light, 
            PH : ph, 
            EC : ec, 
            Height : height})
          .then(res => alert("Successfully Updaded !"), err => reject(err));
      });
    }
    else {
      alert("Can't Updaded !");
    }
  }

  ngOnInit() {
  }

}