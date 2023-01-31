import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {

  constructor(private api:ApiserviceService) { }
  readBooking:any;
  successMsg:any;

  ngOnInit(): void {
    this.getAllbooking();
  }
  
  deleteId(id:any){
    //console.log(id,"selected ID")
    this.api.deleteBooking(id).subscribe((res)=>{
       console.log(res,'deleted Id No');
       this.successMsg = res.message;
       this.getAllbooking();
    })
  }

  getAllbooking(){
    this.api.getAllBooking().subscribe((res)=>{
      console.log('Get All Booking' ,res);
      this.readBooking=res.data;
    })
  }


}
