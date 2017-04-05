// Import Router modules
import { Router, RouterModule } from '@angular/router';

// Import components we want to route too
import { AddListingComponent } from './components/addlisting/addlisting.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { LoginComponent } from './components/login/login.component';

// Export to use
export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'addListing', component: AddListingComponent }
])
