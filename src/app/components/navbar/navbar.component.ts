import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.html'
})

export class NavbarComponent {

  constructor(public af: AngularFire) { }

  menuOpen: any = false;

  menuToggle() {
    this.menuOpen = !this.menuOpen
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
