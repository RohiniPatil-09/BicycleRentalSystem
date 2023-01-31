import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewbicycle',
  templateUrl: './viewbicycle.component.html',
  styleUrls: ['./viewbicycle.component.css']
})
export class ViewbicycleComponent implements OnInit {

  constructor( private api : ApiserviceService) { }

  readBicycles : any;
  successMsg:any;

  ngOnInit(): void {
    this.api.getAllBicycles().subscribe((res)=>{
      console.log('Get All Bicycles' ,res);
      this.readBicycles=res.data;
    })
  }

  deleteName(name:any){
    this.api.deleteData(name).subscribe((res)=>{
      console.log(res, 'deleted Bicycle Name');
      this.successMsg = res.message;
      this.getAlldata();
    })
  }
  getAlldata() {
    this.api.getAllBicycles().subscribe((res)=>{
      console.log('Get All Bicycles' ,res);
      this.readBicycles=res.data;
    })
  }

}
