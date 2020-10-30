import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MEssentialsModifyComponent } from '../m-essentials-modify/m-essentials-modify.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { MEssentialsAddComponent } from '../m-essentials-add/m-essentials-add.component';
import swal from 'sweetalert';

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
        this.plantdataset.splice(0, this.plantdataset.length);
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

  openDialogAdd() {

    const dialogRef = this.dialog.open(MEssentialsAddComponent, {
      data: {
        plant: this.plant
      }
    });
  }

  delete(id: any) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection(this.plant)
        .doc(id)
        .delete().then(res => swal("Good Job!", "Successfully Deleted !", "success"), err => reject(err));
        this.searched_plant(this.plant);
    });
  }
}