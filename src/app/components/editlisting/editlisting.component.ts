import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'editlisting',
  templateUrl: '/editlisting.html',
  styleUrls: ['/style.css']
})

export class EditListingComponent implements OnInit {

  form: FormGroup; // <-- instance of FormGroup

  id;
  title;
  owner;
  city;
  bedrooms;
  price;
  image;
  type;


  constructor(
    fb: FormBuilder,
    private _fire: FirebaseService,
    private _router: Router,
    private _route: ActivatedRoute) {

    // TODO find way to use the same form as add listing form --- refactoring
    // Model Driven form
    this.form = fb.group({
      title: [, Validators.required],
      city: [, Validators.required],
      owner: [, Validators.required],
      type: [, Validators.required],
      bedrooms: [, Validators.required],
      price: [, Validators.required],
      image: []
    })

  }

  ngOnInit() {
    // On page load get the id from the url and set it to id
    this.id = this._route.snapshot.params['id'];
    // Call the getListingDetail function from before to get the single listing from id
    this._fire.getListingDetail(this.id).subscribe(listing => { // <-- subcribe to it
      // Set each input to the listing info we got from the db
      this.title = listing.title;
      this.owner = listing.owner;
      this.city = listing.city;
      this.bedrooms = listing.bedrooms;
      this.price = listing.price;
      this.type = listing.type;
    });

  }

  submitEdit() {
    // When submiting create listing object json with the new values -- if any changed
    let listing = {
      title: this.title,
      owner: this.owner,
      city: this.city,
      bedrroms: this.bedrooms,
      price: this.price,
      type: this.price
    }

    // TODO -- add conition to make sure from is correct
    // Call update funciton from service and pass the id of the listing we want to update and the new listing object
    this._fire.updateListing(this.id, listing);
    // Once updated navigate to listings page
    this._router.navigate(['/listings']);

  }

}
