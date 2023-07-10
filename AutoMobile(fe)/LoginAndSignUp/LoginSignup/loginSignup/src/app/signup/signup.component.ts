import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) { }

  type:string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  userData:any;

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    firstname: ['',Validators.required],
    mobile: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
  })
  
  get email(){ return this.signupForm.get("email")}

  get password(){ return this.signupForm.get("password")}

  get firstname(){ return this.signupForm.get("firstname")}

  get mobile(){ return this.signupForm.get("mobile")}

  OnSubmit(){
      this.authService.registerUser(this.signupForm.value).subscribe(data=> {
        console.log(data);
        this.userData = data;
        this.authService.role = this.userData.role ;
      });
      this
      alert("Registered Successfully !! ")
      this.route.navigate(['']);
  }

  change(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon="fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type="password";
  }
  
}
