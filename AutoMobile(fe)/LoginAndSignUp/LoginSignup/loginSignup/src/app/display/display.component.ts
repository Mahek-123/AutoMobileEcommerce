import { Component, Input } from '@angular/core';
import { AuthService } from 'src/auth.service';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { Vehicle } from '../models/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor(private route: Router,private userService: UserService, private authService: AuthService,private adminService:AdminService){}

  @Input()
  vehicleCard:Vehicle={
    "productId":"",
    "name":"",
    "mileage":"",
    "color":"",
    "price":""
  };
  cart:boolean=false;

  ngOnInit(){
    if(this.authService.role=='user'){
      this.cart=true;
    }
  }

  addToCart(){
    this.userService.addToCart(this.vehicleCard).subscribe();
    alert("Added to cart!")
  }

  delete(){
    this.adminService.deleteVehicle(this.vehicleCard.productId).subscribe();
    alert("Deleted Product!");
    this.route.navigate(['/dashboardAdmin'])
  }

}
