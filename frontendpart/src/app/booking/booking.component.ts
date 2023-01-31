import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Bookingbicycle } from '../bookingbicycle';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingbicycle: Bookingbicycle= new Bookingbicycle();
  constructor(private api:ApiserviceService) { }
  errMsg:any;
  successMsg:any;
  ngOnInit(): void {
  }
  bookingForm = new FormGroup({
    'name':new FormControl('', Validators.required),
    'category':new FormControl('', Validators.required),
    'date':new FormControl('', Validators.required),
    'time':new FormControl('', Validators.required),
  })

  bookingSubmit(){
    //console.log(this.bookingForm.value);
    if(this.bookingForm.valid){
      console.log(this.bookingForm.value);
      this.api.createBooking(this.bookingForm.value).subscribe((res)=>{
        console.log(res, 'Data added Success')
        this.bookingForm.reset();
        this.successMsg = res.message;
      })
    }else{
      this.errMsg = 'All fields are required';
    }
  }
  
  Bicyclebooking(){
    
  }
}

