import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-form-arabic',
  templateUrl: './register-form-arabic.component.html',
  styleUrls: ['./register-form-arabic.component.css']
})
export class RegisterFormArabicComponent implements OnInit {

  model: any = {};
  data: any = {};
  submitted: any = {};
  onSubmit: any = {};


  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit() {
  }

  createContact(model) {
    this.apiService.createContact(model).subscribe((response) => {
      this.data = response;
      if (this.data.Message == "User Already Registered") {

        console.log("data=====>", this.data);

        swal(this.data.Message + "<br>" + "مستخدم مسجل بالفعل");


      }
      else if (this.data.Message == "please check your email for one time password") {
        swal(this.data.Message)
        document.getElementById('id01').style.display = 'block'
      }
      else if (this.data.Message == "Please provide Mandatory fields") {
        swal("Please fill the Mandatory fields" + "<br>" + "يرجى ملء الحقول الإلزامية")

      }

      // this.router.navigate(['/login']);

    });

  };
  newsletter(model) {
    this.apiService.newsletter(model).subscribe((response) => {
      this.data = response;
      console.log(this.data);
      swal(this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
    })
  };
  emailotpverification(model) {
    this.apiService.emailotpverification(model).subscribe((response) => {
      this.data = response;
      console.log("data=====>", this.data.message);
      if (this.data.message == "You are successfully registered") {
        console.log("data=====>", this.data);

        swal("Registration Successful" + "<br>" + "التسجيل ناجح")

        this.router.navigate(['/login']);
      }
      else if (this.data.message == "Invalid one time password") {
        swal("Invalid one time password" + "<br>" + "كلمة مرور غير صالحة مرة واحدة")
      }


    });

  };

  sendotp(model) {
    this.apiService.sendotp(model).subscribe((response) => {
      this.data = response;
      if (this.data.code = '200') {
        console.log("data=====>", this.data);

        //   alert('OTP sent to email' );


      }

      // this.router.navigate(['/login']);

    });

  };


  backhome() {
    this.router.navigate(['/login']);
  }



  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}
export class AppModalContentComponent { }