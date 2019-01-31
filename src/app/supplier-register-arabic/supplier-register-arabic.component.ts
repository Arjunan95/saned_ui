import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-supplier-register-arabic',
  templateUrl: './supplier-register-arabic.component.html',
  styleUrls: ['./supplier-register-arabic.component.css']
})
export class SupplierRegisterArabicComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;

  model: any = {};
  data: any = {};
  submitted: any = {};
  newVar: any = {};
  minDate: any = {};
  emailotpverification: any = {};
  onSubmit: any = {};
  Lang: any = {};
  constructor(private apiService: APIService, private router: Router, private calendar: NgbCalendar) { }

  ngOnInit() {
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  newsletter(model) {
    this.apiService.newsletter(model).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      swal(this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
    })
  };
  supplieremailotpverification(model) {
    this.apiService.supplieremailotpverification(model).subscribe((response) => {
      this.data = response;
      console.log("data=====>", this.data.message);

      if (this.data.message == "You are successfully registered") {
        console.log("data=====>", this.data);

        swal("Registration Successful" + "<br>" + "التسجيل ناجح")

        this.router.navigate(['/login']);
      }
      else if (this.data.message == "Invalid one time password") {
        swal("Invalid one time password")
      }

    })
  }
  supplierregister(model) {
    this.apiService.supplierregister(model).subscribe((response) => {
      this.data = response;
      if (this.data.Message == "User Already Registered") {

        console.log("data=====>", this.data);

        swal(this.data.Message + "<br>" + "مستخدم مسجل بالفعل");


      }
      else if (this.data.message == "Please provide an Emailid") {
        console.log("email")
        swal("Please fill the Mandatory fields")
      }

      else if (this.data.Message == "please check your email for one time password") {
        swal("please check your email for one time password")
        document.getElementById('id01').style.display = 'block'
      }
      // this.router.navigate(['/login']);

    });

  };
}
