import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent {
  constructor(private adminService: AdminService, private route: Router, private user: UserService, private auth: AuthService) { }

  allVehicles: any;
  userInfo: any;

  name: any;
  firstName: any;
  ngOnInit() {
    if (!this.auth.access) {
      this.route.navigate(['']);
    }
    this.adminService.allVehicles().subscribe(allData => this.allVehicles = allData);
    this.user.getCustomerData().subscribe(data => { this.userInfo = data; alert("Welcome " + this.userInfo.firstname) });
  }

  showCart() {
    this.route.navigate(['/myCart']);
  }
}
