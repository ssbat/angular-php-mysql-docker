import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
// import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/Classes/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { FullproductComponent } from './fullproduct/fullproduct.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"shop",component:ShopComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent,canActivate: [AuthGuard] },
  {path:"cart",component:CartComponent},
  {path:'products/:id',component:FullproductComponent},
  {path:'user',component:UserComponent}



  // ,canActivate: [AuthGuard]
  // ,canActivate: [AuthGuard] 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
