import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authservice : AuthService, private route: Router){}

  role?:boolean;

  ngOnInit(){
  if(this.authservice.role=='admin'){
    this.role=true;
  }
  else{
    this.role=false;
  }
  }

  logout(){
    this.route.navigate(['/login']);
    this.authservice.access=false;
    localStorage.clear();
    this.authservice.role="";

  }
  home(){
    this.route.navigate(['/login'])
  }
  dashboard(){
    if(this.authservice.role=="admin"){
    this.route.navigate(['/dashboardAdmin'])
    }
    else{
    this.route.navigate(['/dashboardUser'])
    }
  }
}
