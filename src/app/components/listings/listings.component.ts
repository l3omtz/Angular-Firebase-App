import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'listings',
  templateUrl: './listings.html',
  styleUrls: ['./style.css']
})

export class ListingsComponent implements OnInit {

  listings: any;

  // Inject as dependancy to the constructor
  constructor(private _fire: FirebaseService) {

  }

  ngOnInit() {
    // Call get listings function on initialize
    this._fire.getListings().subscribe(listings => { // <-- Subscribe to it with return of listings
      this.listings = listings; // <-- Set listings = to the return listings

      // =======
      // Looping images to show
      // in listings -- not best practice
      // =======
      // let storageRef = firebase.storage().ref();
      // for (let x of this.listings) {
      //   storageRef.child(x.path).getDownloadURL().then((url) => {
      //     x.path = url;
      //   }).catch((err) => {
      //     console.log(err);
      //   });
      // }

    });
  }

}
