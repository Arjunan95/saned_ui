import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {
  model: any = {};
  data: any = {};
  constructor(private  apiService:  APIService,private router: Router,private sg: SimpleGlobal) { }

  ngOnInit() {
  }
  newsletter(model){
    this.apiService.newsletter(model).subscribe((response) => {
        this.data = response;
        console.log(this.data);
        swal(this.data.Message+"<br>"+"اشتركت بنجاح في النشرة الإخبارية" );
    })
};
}