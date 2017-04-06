import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'listings',
  templateUrl: './listings.html'
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
      console.log(listings);
    })
  }

}
