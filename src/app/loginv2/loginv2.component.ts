import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginv2',
  templateUrl: './loginv2.component.html',
  styleUrls: ['./loginv2.component.css']
})
export class Loginv2Component implements OnInit {
  email: any = {};
  password: any = {};
  user: any = {};
  login: any = {};
  model: any = {};
  constructor() { }

  ngOnInit() {
  }

}
