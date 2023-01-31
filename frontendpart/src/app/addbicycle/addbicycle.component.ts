import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-addbicycle',
  templateUrl: './addbicycle.component.html',
  styleUrls: ['./addbicycle.component.css']
})
export class AddbicycleComponent implements OnInit {
  
  constructor(private api : ApiserviceService) { }

  errMsg:any;
  successMsg:any;

  ngOnInit(): void {
  }

  bicycleAddForm = new FormGroup({
    'name':new FormControl('', Validators.required),
    'cost':new FormControl('', Validators.required),
    'category':new FormControl('', Validators.required),
    'description':new FormControl('', Validators.required),
  })

  bicycleAdd(){
    //console.log(this.bicycleAddForm.value);
    if(this.bicycleAddForm.valid){
      console.log(this.bicycleAddForm.value);
      this.api.createBicycles(this.bicycleAddForm.value).subscribe((res)=>{
        console.log(res, 'Bicycle added Successfully')
        this.bicycleAddForm.reset();
        this.successMsg = res.message;
      })
      
    }else{
      this.errMsg = 'All fields are required';
    }
  }

}
