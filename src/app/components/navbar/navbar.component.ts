import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html'
})

export class NavbarComponent {

  menuOpen: any = false;

  menuToggle() {
    this.menuOpen = !this.menuOpen
  }

}
