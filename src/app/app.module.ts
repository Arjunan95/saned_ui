import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { AboutUsComponent } from './about-us/about-us.component';
import { GovernmentServicesComponent } from './government-services/government-services.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecaptchaDirective } from './recaptcha.directive';
import { Loginv2Component } from './loginv2/loginv2.component';
import Swal from 'sweetalert2';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AmanservicesComponent } from './amanservices/amanservices.component';
import { SalamaservicesComponent } from './salamaservices/salamaservices.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactComponent } from './contact/contact.component'
import { confirmvalidatorDirective } from './confirmpassvalidator.directive';

import { SimpleGlobal } from 'ng2-simple-global';
import { LoginArbicComponent } from './login-arbic/login-arbic.component';
import { RegisterFormArabicComponent } from './register-form-arabic/register-form-arabic.component';
import { SalamaservicesArabicComponent } from './salamaservices-arabic/salamaservices-arabic.component';
import { AmanservicesArabicComponent } from './amanservices-arabic/amanservices-arabic.component';
import { AboutusArabicComponent } from './aboutus-arabic/aboutus-arabic.component';
import { ContactusArabicComponent } from './contactus-arabic/contactus-arabic.component';
import { SupplierRegisterComponent } from './supplier-register/supplier-register.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { SupplierRegisterArabicComponent } from './supplier-register-arabic/supplier-register-arabic.component';
import { SitemapArabicComponent } from './sitemap-arabic/sitemap-arabic.component';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyArabicComponent } from './privacy-arabic/privacy-arabic.component';
import { NavbararabicComponent } from './navbararabic/navbararabic.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register-form', component: RegisterFormComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'government-services', component: GovernmentServicesComponent },
  { path: 'home', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'amanservices', component: AmanservicesComponent },
  { path: 'salamaservices', component: SalamaservicesComponent },
  { path: 'supplier-register', component: SupplierRegisterComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'sitemap-arabic', component: SitemapArabicComponent },
  { path: 'login-arbic', component: LoginArbicComponent },
  { path: 'register-form-arabic', component: RegisterFormArabicComponent },
  { path: 'salamaservices-arabic', component: SalamaservicesArabicComponent },
  { path: 'amanservices-arabic', component: AmanservicesArabicComponent },
  { path: 'aboutus-arabic', component: AboutusArabicComponent },
  { path: 'contactus-arabic', component: ContactusArabicComponent },
  { path: 'supplier-register-arabic', component: SupplierRegisterArabicComponent },
  { path: 'privacy-arabic', component: PrivacyArabicComponent },
  { path: 'navbararabic', component: NavbararabicComponent },






]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule,
    HttpClientModule,
    NgDatepickerModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    AboutUsComponent,
    GovernmentServicesComponent,
    FooterComponent,
    LoginComponent,
    RecaptchaDirective,
    Loginv2Component,
    AmanservicesComponent,
    SalamaservicesComponent,
    ContactusComponent,
    ContactComponent,
    confirmvalidatorDirective,
    LoginArbicComponent,
    RegisterFormArabicComponent,
    SalamaservicesArabicComponent,
    AmanservicesArabicComponent,
    AboutusArabicComponent,
    ContactusArabicComponent,
    SupplierRegisterComponent,
    SitemapComponent,
    SupplierRegisterArabicComponent,
    SitemapArabicComponent,
    PrivacyComponent,
    PrivacyArabicComponent,
    NavbararabicComponent,
    

  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LfQqIQUAAAAABL8W6ckQ5_jVY-flsBo8RHrI9Vx',
      } as RecaptchaSettings,
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'En', // use French language
    },
    { provide: SimpleGlobal }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }