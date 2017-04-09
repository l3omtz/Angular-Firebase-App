import { Injectable } from '@angular/core';
// Helps us fetch from the DB
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()

export class FirebaseService {

  // Set listings to type Firebase Observable any -- Lists
  listings: FirebaseListObservable<any[]>;
  // Set listings to type Object Obserable
  listing: FirebaseObjectObservable<any[]>;

  constructor(private _af: AngularFire) { }

  // Fuction to get llstings
  getListings() {
    // Set listings to  private module listings as FirebaseListObservable of type Listing interface
    this.listings = this._af.database.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings; // <- Return the listings we got from the DB
  }

  getListingDetail(id) {
    this.listing = this._af.database.object('/listings/' + id) as FirebaseObjectObservable<Listing>
    return this.listing;
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
