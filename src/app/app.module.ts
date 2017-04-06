import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Firebase
import { AngularFireModule } from 'angularfire2';
// Firebase Config
export const firebaseConfig = {
  apiKey: 'AIzaSyCE3r-gpJlgbNHXB1_5HZWrzcqi7VT4hwc',
  authDomain: 'real-estate-listings-9c245.firebaseapp.com',
  databaseURL: 'https://real-estate-listings-9c245.firebaseio.com',
  storageBucket: 'real-estate-listings-9c245.appspot.com',
  messagingSenderId: '96434610756>'
};

// Services
import { FirebaseService } from './services/firebase.service';

// Components
import { AppComponent } from './app.component';
import { AddListingComponent } from './components/addlisting/addlisting.component';
import { EditListingComponent } from './components/editlisting/editlisting.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Routes
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AddListingComponent,
    EditListingComponent,
    HomeComponent,
    ListingComponent,
    ListingsComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [FirebaseService], // <-- All services are set as providers 
  bootstrap: [AppComponent]
})
export class AppModule { }
