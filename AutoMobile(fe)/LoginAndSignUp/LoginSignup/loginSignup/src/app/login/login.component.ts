import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router, private userService: UserService) { }

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  myToken: any;
  loggedUser: any;
  userInfo:any;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  get email() { return this.loginForm.get("email") }

  get password() { return this.loginForm.get("password") }


  key: any;
  

  ngOnInit() {
    this.key = localStorage.getItem("Token");
  }

  OnSubmit() {
    this.authService.getToken(this.loginForm.value).subscribe(
      {
        next: data => {
          this.myToken = data;
          localStorage.setItem("Token", this.myToken.Token);
          console.log("Token Generated");
          this.authService.access = true;
          if (this.email?.value == "admin@123.com") {
            this.authService.role = "admin";
            this.route.navigate(['/dashboardAdmin']);
          }
          else {
            this.authService.role = "user";
            this.route.navigate(['/dashboardUser']);
          }
          this.userService.getCustomerData().subscribe(data => {this.userInfo = data ; this.key=this.userInfo.firstname});

        },
        error: err => alert("Login Failed!")
      }
    )

  }

  change() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
