import { Component, OnInit } from '@angular/core';
import { Cancelbooking } from '../cancelbooking';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  cancelbooking: Cancelbooking= new Cancelbooking();
  constructor() { }

  ngOnInit(): void {
  }
  
  Bookingcancel(){
    console.log(this.cancelbooking)
  }
}
