// Import Router modules
import { Router, RouterModule } from '@angular/router';

// Import components we want to route too
import { AddListingComponent } from './components/addlisting/addlisting.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { EditListingComponent } from './components/editlisting/editlisting.component';


// Export to use
export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'addListing', component: AddListingComponent },
  { path: 'editlisting/:id', component: EditListingComponent }
])
