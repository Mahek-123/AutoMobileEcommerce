import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from './models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  allVehicles(){
    return this.http.get("http://localhost:8091/api/v1/main/admin-getAll");
  }

  addVehicle(Vehicle:any){
    let HttpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('Token')});
      let requestOptions = {headers:HttpHeader}
    return this.http.post("http://localhost:8091/api/v1/main/admin-add",Vehicle,requestOptions);
  }

  deleteVehicle(productId:any){
    let HttpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('Token')});
      let requestOptions = {headers:HttpHeader}
      return this.http.delete("http://localhost:8091/api/v1/main/delete/"+`${productId}`,requestOptions);
  }

  getProduct(productId:any){
    return this.http.get(" http://localhost:8091/api/v1/main/product/"+`${productId}`);
  }

  updateProductDetails(vehicle:any){
    return this.http.put("http://localhost:8091/api/v1/main/updateProduct",vehicle);
  }

}
