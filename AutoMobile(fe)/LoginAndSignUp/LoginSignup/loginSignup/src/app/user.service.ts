import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  name:string="";

  getCustomerData(){
    let HttpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('Token')});
      let requestOptions = {headers:HttpHeader}
    return this.http.get("http://localhost:8091/api/v1/main/getUserDetails",requestOptions);
  }

  addToCart(addVehicle:any){
    let HttpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('Token')});
      let requestOptions = {headers:HttpHeader}
    return this.http.post("http://localhost:8091/api/v1/main/addToCart",addVehicle,requestOptions);
  }
}
