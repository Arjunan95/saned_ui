import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-salamaservices-arabic',
  templateUrl: './salamaservices-arabic.component.html',
  styleUrls: ['./salamaservices-arabic.component.css']
})
export class SalamaservicesArabicComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  localVar;

  model: any = {};
  data: any = {};
  Lang: any = {};
  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit() {
  }

  newsletter(model) {
    this.apiService.newsletter(model).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      swal(this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
    })
  };

  supplierregister(model) {
    this.apiService.supplierregister(model).subscribe((response) => {
      this.data = response;
      if (this.data.Message == "User Already Registered") {

        console.log("data=====>", this.data);

        swal(this.data.Message + "<br>" + "مستخدم مسجل بالفعل");


      }
      else {
        swal("Please check your email")
        document.getElementById('id01').style.display = 'block'
      }
      // this.router.navigate(['/login']);

    });

  };
}