import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class DataBackupService {

  constructor( afs: AngularFirestore, db: AngularFireDatabase, aff: AngularFireFunctions ) { 

    

  }
}
