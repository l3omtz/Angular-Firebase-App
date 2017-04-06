import { Injectable } from '@angular/core';
// Helps us fetch from the DB
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class FirebaseService {

  // Set listing to type Firebase Observable any
  listings: FirebaseListObservable<any[]>;

  constructor(private _af: AngularFire) { }

  // Fuction to get llstings
  getListings() {
    // Set listings to  private module listings as FirebaseListObservable of type Listing interface
    this.listings = this._af.database.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings; // <- Return the listing we got from the DB
  }

}

// Outside the class 
interface Listing {
  $key?: String;
  title?: String;
  type?: String;
  image?: String;
  city?: String;
  owner?: String;
  bedrooms?: String;
}
