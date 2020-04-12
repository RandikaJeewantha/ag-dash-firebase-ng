import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MEssentialsModifyComponent } from '../m-essentials-modify/m-essentials-modify.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-essential-table',
  templateUrl: './essential-table.component.html',
  styleUrls: ['./essential-table.component.scss']
})
export class EssentialTableComponent {

  displays: string;
  plant: string;
  plantdataset = [];

  constructor(public dialog: MatDialog, private afs: AngularFirestore) {
    this.displays = "none";
  }

  searched_plant(value: string) {

    if (value == undefined) {
      this.displays = "none";
    }

    else {

      this.plant = value;

      this.afs.collection(this.plant).ref.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.plantdataset.push(doc.data());
        });
      });

      this.displays = "";
    }

  }

  openDialogModify(value: any) {

    const dialogRef = this.dialog.open(MEssentialsModifyComponent, {
      data: {
        Data: value,
        plant: this.plant
      }
    });

  }

}