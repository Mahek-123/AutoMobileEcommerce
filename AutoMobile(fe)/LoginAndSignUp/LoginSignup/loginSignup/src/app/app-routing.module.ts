import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { CartComponent } from './cart/cart.component';
import { AuthguardGuard } from './authguard.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateproductdetailsComponent } from './updateproductdetails/updateproductdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo: '', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboardAdmin', component: DashboardAdminComponent,canActivate: [AuthguardGuard]},
  { path: 'dashboardUser', component: DashboardUserComponent,canActivate: [AuthguardGuard] },
  { path: 'myCart', component: CartComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'display/updateproductdetails/:productId', component: UpdateproductdetailsComponent },
  { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
