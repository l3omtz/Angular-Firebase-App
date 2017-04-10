import { Injectable } from '@angular/core';
// Helps us fetch from the DB
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()

export class FirebaseService {

  // Set listings to type Firebase Observable any -- Lists
  listings: FirebaseListObservable<any[]>;
  // Set listings to type Object Obserable
  listing: FirebaseObjectObservable<any[]>;
  // Create image folder of any
  folder: any;

  constructor(private _af: AngularFire) {
    // Folder name on the firebase side
    this.folder = "listingimages";
  }

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


  addListing(listing) {
    // Create root ref for image
    let storageRef = firebase.storage().ref();
    // Loop throguh the document to fand all images at index 0
    for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      // Create path -- template literal
      let path = `/${this.folder}/${selectedFile.name}`; // <-- path: "/foldername/imagename/"
      // Then create a strage ref and pass in path
      let iRef = storageRef.child(path); // <-- points to path
      // In the stroage ref pass the selected image files
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name; // <-- set listing image to the name of the selesctd file  -- image: "name.jpg"
        listing.path = path; // <-- so we can have a path to the image -- path: "/foldername/imagename/"
        return this.listings.push(listing); // <-- this will save everything from from -- pushing to the list 
      });
    }
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
