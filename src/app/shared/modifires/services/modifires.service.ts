import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ModifiresService {

  displays: string;
  plant: string;
  plantdataset = [];

  constructor(private afs: AngularFirestore) {
    this.displays = "none";
  }

  searched_plant(value: string) {

    if (value == undefined) {
      this.displays = "none";
    }

    else {

      this.plant = value;

      this.afs.collection(this.plant).ref.get().then((querySnapshot) => {
        this.plantdataset.splice(0, this.plantdataset.length);
        querySnapshot.forEach((doc) => {
          this.plantdataset.push(doc.data());
        });
      });

      this.displays = "";
    }

  }
}
