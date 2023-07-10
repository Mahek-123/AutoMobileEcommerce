import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { Vehicle } from '../models/vehicle';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private user : UserService,private authService: AuthService,private route:Router){}
  
  vehicles:any;

  ngOnInit(){
    if(!this.authService.access){
      this.route.navigate(['']);
    }
    this.user.getCustomerData().subscribe(data =>this.vehicles = data)}
}
