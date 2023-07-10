import { Component, Input } from '@angular/core';
import { AdminService } from '../admin.service';
import { Vehicle } from '../models/vehicle';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent {

  constructor(private adminService: AdminService,private route:Router){}

  @Input()
  vehicleCard:Vehicle={
    "productId":"",
    "name":"",
    "mileage":"",
    "color":"",
    "price":""
  };

  deletefromCart(){
    alert(this.vehicleCard.name+" Removed from Cart");
    this.adminService.deleteVehicle(this.vehicleCard.productId).subscribe();
    this.route.navigate(['/dashboardUser']);
  }

}
