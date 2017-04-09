import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'add-listing',
  templateUrl: './addlisting.html',
  styleUrls: ['./style.css']
})

export class AddListingComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: [, Validators.required],
      city: [, Validators.required],
      owner: [, Validators.required],
      type: [, Validators.required],
      bedrooms: [, Validators.required],
      price: [, Validators.required]
    })
  }

  ngOnInit() {

  }

}
