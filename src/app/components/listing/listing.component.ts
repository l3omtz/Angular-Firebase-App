import { Component, OnInit } from '@angular/core';
// To get Id from url we need this
import { Router, ActivatedRoute, Params } from '@angular/router';
// Get function from service
import { FirebaseService } from '../../services/firebase.service';
// Firebase
import * as firebase from 'firebase';

@Component({
  selector: 'listingDetail',
  templateUrl: './listing.html',
  styleUrls: ['./style.css']
})

export class ListingComponent implements OnInit {
  id: any;
  listing: any;
  imageUrl: any;

  constructor(
    private _fire: FirebaseService, // <-- Services
    private _router: Router,      // <-- Route in General
    private _route: ActivatedRoute) { } // <-- Route that we are on

  ngOnInit() {
    // Set the id from url to the id property
    this.id = this._route.snapshot.params['id'];

    this._fire.getListingDetail(this.id).subscribe(listing => {
      this.listing = listing;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listing.path);

      storageRef.child(this.listing.path).getDownloadURL().then((url) => {
        // set image url
        this.imageUrl = url;
      }).catch((err) => {
        console.log(err);
      });

    });

  }

  onDelete() {
    this._fire.deleteListing(this.id);

    this._router.navigate(['/listings']);
  }

}
