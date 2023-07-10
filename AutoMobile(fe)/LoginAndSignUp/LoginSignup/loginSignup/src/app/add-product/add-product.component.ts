import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb: FormBuilder, private adminService: AdminService, private route: Router){}
  
  addProductForm = this.fb.group({
    name: ['', Validators.required],
    mileage: ['', Validators.required],
    color: ['', Validators.required],
    price: ['', Validators.required]
  })

  get name() { return this.addProductForm.get("name") }

  get mileage() { return this.addProductForm.get("mileage") }

  get color() { return this.addProductForm.get("color")}

  get price(){ return this.addProductForm.get("price")}

  OnSubmit(){
    this.adminService.addVehicle(this.addProductForm.value).subscribe();
    alert("Product Added!")
    this.route.navigate(['/dashboardAdmin']);
  }

  back(){
    this.route.navigate(['/dashboardAdmin'])
  }
}
