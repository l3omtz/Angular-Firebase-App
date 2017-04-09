import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'add-listing',
  templateUrl: './addlisting.html',
  styleUrls: ['./style.css']
})

export class AddListingComponent implements OnInit {
  form: FormGroup; // <-- instance of FormGroup

  title: any;
  city: any;
  owner: any;
  type: any;
  price: any;
  bedrooms: any;
  image: any;

  constructor(
    fb: FormBuilder,
    private _fire: FirebaseService,
    private _route: Router
  ) {
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

  }

  // On submit Form
  submitForm() {
    // Create listing object
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      type: this.type,
      price: this.price,
      bedrooms: this.bedrooms
    }

    // @TODO Add condition to check if form is filled out correctly before navigating and submitting
    this._fire.addListing(listing);

    this._route.navigate(['listings']);
  }

}
