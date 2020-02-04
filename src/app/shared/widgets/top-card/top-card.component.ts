import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Categories { value: string; };
export interface Plants { value: string; };
export interface Indicators { value: string; };

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent{

  private categoriesDoc: AngularFirestoreDocument<Categories>;
  categories: Observable<Categories>;

  private plantsDoc: AngularFirestoreDocument<Plants>;
  plants: Observable<Plants>;

  private indicatorsDoc: AngularFirestoreDocument<Indicators>;
  indicators: Observable<Indicators>;

  constructor(private afs: AngularFirestore) {

    this.categoriesDoc = afs.doc<Categories>('summary/categories');
    this.categories = this.categoriesDoc.valueChanges();

    this.plantsDoc = afs.doc<Plants>('summary/plants');
    this.plants = this.plantsDoc.valueChanges();

    this.indicatorsDoc = afs.doc<Indicators>('summary/indicators');
    this.indicators = this.indicatorsDoc.valueChanges();

  }
}
