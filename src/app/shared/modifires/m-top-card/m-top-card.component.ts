import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-m-top-card',
  templateUrl: './m-top-card.component.html',
  styleUrls: ['./m-top-card.component.scss']
})
export class MTopCardComponent implements OnInit {

  number1 = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  number2 = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  number3 = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);

  getErrorMessage() {
    return this.number1.hasError('required') ? 'You must enter a value' :
        this.number1.hasError('pattern') ? 'Not a valid number' :'';
  }

  constructor(public fs: AngularFirestore) { }
  
  Indicator(value: string){
    return new Promise<any>((resolve, reject) =>{
      this.fs
          .collection("summary")
          .doc("indicators")
          .update({value: value})
          .then(res => alert("successfully updaded indicators count as :  "+value), err => reject(err));
  });
  }

  Plant(value: string){
    return new Promise<any>((resolve, reject) =>{
      this.fs
          .collection("summary")
          .doc("plants")
          .update({value: value})
          .then(res => alert("successfully updaded plants count as :  "+value), err => reject(err));
  });
  }

  Category(value: string){
    return new Promise<any>((resolve, reject) =>{
      this.fs
          .collection("summary")
          .doc("categories")
          .update({value: value})
          .then(res => alert("successfully updaded category count as :  "+value), err => reject(err));
  });
  }

  ngOnInit() {
  }

}
