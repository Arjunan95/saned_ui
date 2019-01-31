import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SimpleGlobal } from 'ng2-simple-global';


@Component({
    selector: 'app-login-arbic',
    templateUrl: './login-arbic.component.html',
    styleUrls: ['./login-arbic.component.css']
})
export class LoginArbicComponent implements OnInit {
    navbarOpen = false;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    localVar;


    // powers = ['Really Smart', 'Super Flexible',
    //           'Super Hot', 'Weather Changer'];

    // model = new RegisterForm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    model: any = {};
    data: any = {};
    Lang: any = {};
    user: any = {};

    constructor(private apiService: APIService, private router: Router, private sg: SimpleGlobal) {

    }

    ngOnInit() {
    }

    login(model) {
        this.apiService.login(model).subscribe((response) => {
            this.data = response;
            if (this.data.Message == "Login Successfull") {
                console.log("data=====>", this.data);
                //   alert('Login Successful' );
                document.getElementById('login').style.display = 'none'
                document.getElementById('id01').style.display = 'none'

                document.getElementById('logout').style.display = 'block'





                this.router.navigate(['/login-arbic']);
            }
            else if (this.data.Message == "Invalid User name") {
                swal("Invalid User name");
            }
            else if (this.data.Message == "Password is Incorrect") {
                swal("Password is Incorrect");
            }
            else if (this.data.Message == "One Time Password is not verified.Please register Again") {
                swal("One Time Password is not verified.Please register Again");
            }


        });

    };
    newsletter(model) {
        this.apiService.newsletter(model).subscribe((response) => {
            this.data = response;
            console.log(this.data);
            swal(this.data.Message + "<br>" + "اشتركت بنجاح في النشرة الإخبارية");
        })
    };

    forgetotpverification(model) {
        console.log("enter in to otp login ts service", this.model.otp)
        this.apiService.forgetotpverification(model).subscribe((response) => {
            this.data = response;
            if (this.data.status == "true") {
                console.log("data=====>", this.data);

                swal('Password updated successfully' + "<br>" + "التسجيل ناجح")

                this.router.navigate(['/login']);
            }
            else if (this.data.message == "Invalid one time password") {
                console.log("kavitha")
                swal('Invalid one time password' + "<br>" + "كلمة مرور غير صالحة مرة واحدة")
            }



        });

    };

    forgetpassword(model) {
        this.apiService.forgetpassword(model).subscribe((response) => {
            this.data = response;
            if (this.data.Message == "Password should not be a previously used one") {
                document.getElementById('id03').style.display = 'none'


                console.log("data=====>", this.data);

                swal(this.data.Message + "<br>" + "كلمة المرور لا يجب أن تكون كلمة مرور سبق استخدامها");


            }
            else if (this.data.Message == "password is updated") {
                document.getElementById('id03').style.display = 'block'


                swal(this.data.Message + "<br>" + "")

            }
            else if (this.data.Message == "password doesn't match") {
                document.getElementById('id03').style.display = 'none'

                swal(this.data.Message + "<br>" + "")
            }


            else if (this.data.Message == "Invalid User Name") {
                document.getElementById('id03').style.display = 'none'

                swal(this.data.Message + "<br>" + "")
            }
            else if (this.data.Message == "Please fill all the details") {
                document.getElementById('id03').style.display = 'none'

                swal(this.data.Message + "<br>" + "")
            }
        });

    };


    onSubmit() {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }



    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }
}
