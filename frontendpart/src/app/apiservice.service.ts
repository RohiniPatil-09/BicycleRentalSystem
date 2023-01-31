import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl="http://localhost:3000/bicycles";
  addBicyUrl="http://localhost:3000/bicycles";
  bookUrl="http://localhost:3000/bookings";
  cancelUrl="http://localhost:3000/bookings";

  constructor(private http : HttpClient) { }

   //Get all bicycles data
   getAllBicycles():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  // add bicycles data
  createBicycles(data:any):Observable<any>{
    console.log(data,'bicycle added')
    return this.http.post(`${this.addBicyUrl}`,data);
  }

  //create booking
  createBooking(data:any):Observable<any>{
    console.log(data, 'Data Created')
    return this.http.post(`${this.bookUrl}`,data);
  }

  getAllBooking():Observable<any>{
    return this.http.get(`${this.bookUrl}`);
  }

  deleteBooking(id:any):Observable<any>{
    let ids = id;
    return this.http.delete(`${this.cancelUrl}/${ids}`);
  }

  deleteData(name:any):Observable<any>{
    let names = name;
    return this.http.delete(`${this.cancelUrl}/${names}`);
  }

  updateData(data:any, name:any):Observable<any>{
    let names = name;
    return this.http.put(`${this.cancelUrl}/${names}`,data)
  }

  getSingleData(name:any):Observable<any>{
    let names = name;
    return this.http.get(`${this.apiUrl}/${names}`);
  }

}
