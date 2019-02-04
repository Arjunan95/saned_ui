import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbararabic',
  templateUrl: './navbararabic.component.html',
  styleUrls: ['./navbararabic.component.css']
})
export class NavbararabicComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;

  constructor() { }

  ngOnInit() {
  }

}
