import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  navbarOpen = false;
  model: any = {};

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;


  constructor() { }

  ngOnInit() {
  }

}
