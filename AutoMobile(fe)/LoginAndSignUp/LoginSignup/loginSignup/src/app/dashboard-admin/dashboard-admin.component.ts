import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  constructor(private adminService : AdminService, private route: Router){}

  allVehicles:any;

  ngOnInit(){
    this.adminService.allVehicles().subscribe(allData=> this.allVehicles = allData )
}
}
