import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbicycleComponent } from './addbicycle/addbicycle.component';
import { ViewbicycleComponent } from './viewbicycle/viewbicycle.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{ HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { BookingComponent } from './booking/booking.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbicycleComponent,
    ViewbicycleComponent,
    HomepageComponent,
    BookingComponent,
    BookingdetailsComponent,
    AdminloginComponent,
    AboutusComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    UserloginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
