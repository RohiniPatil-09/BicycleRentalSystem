import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddbicycleComponent } from './addbicycle/addbicycle.component';
import { ViewbicycleComponent } from './viewbicycle/viewbicycle.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { BookingComponent } from './booking/booking.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path:'aboutus', component:AboutusComponent},
  
  {path:'addbicycle', component:AddbicycleComponent},
  {path:'viewbicycle', component:ViewbicycleComponent},

  {path:'booking', component:BookingComponent},
  {path:'bookingdetails', component:BookingdetailsComponent},

  {path:'adminlogin', component:AdminloginComponent},
  {path:'userlogin', component:UserloginComponent},
  {path:'signup', component:SignupComponent},
  
  
  {path:'userdashboard', component:UserdashboardComponent},
  {path:'admindashboard', component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
