import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SimpleGlobal } from 'ng2-simple-global';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
  }
  localVar;


  model: any = {};
  data: any = {};
  constructor(private translate: TranslateService,private  apiService:  APIService,private router: Router,private sg: SimpleGlobal) { }

  ngOnInit() {
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  newsletter(model){
    this.apiService.newsletter(model).subscribe((response) => {
        this.data = response;
        console.log(this.data);
        swal(this.data.Message+"<br>"+"اشتركت بنجاح في النشرة الإخبارية" );
    })
};
   user:{
  
    }

}
