import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Vehicle } from '../models/vehicle';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateproductdetails',
  templateUrl: './updateproductdetails.component.html',
  styleUrls: ['./updateproductdetails.component.css']
})
export class UpdateproductdetailsComponent implements OnInit {

  constructor(private route:Router,private activateRoute: ActivatedRoute, private adminService: AdminService, private fb: FormBuilder) { }

  vehicle: Vehicle = { "name": "", "mileage": "", "color": "", "price": "" };


  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let id = params.get("productId") ?? 0;
      this.adminService.getProduct(+id).subscribe(data => {
        this.vehicle = data;
      })
    })
  }

  OnSubmit(){
    this.adminService.updateProductDetails(this.vehicle).subscribe();
    alert("Product Details Updated!");
    this.route.navigate(['dashboardAdmin'])
  }

  back(){
    this.route.navigate(['/dashboardAdmin'])
  }

}
