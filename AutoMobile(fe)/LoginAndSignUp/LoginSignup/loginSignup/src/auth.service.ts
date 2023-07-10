import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token:any;
  role:any;
  access:boolean=false;

  registerUser(registerUser:any){
    return this.http.post("http://localhost:8091/api/v1/main/register",registerUser);
  }

  getToken(loginDetails:any){
  //  let data:any={
  //     "email":loginDetails.email,
  //     "password":loginDetails.password
  //   }
    return this.http.post("http://localhost:8090/api/v1/user/login",loginDetails);
  }

  setToken(token:any){
      this.token=token;
  }




}
