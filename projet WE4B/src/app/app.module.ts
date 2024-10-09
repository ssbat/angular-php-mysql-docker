import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LaptoplistComponent } from './laptoplist/laptoplist.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
// import { AngularFirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';

import { PromotionsComponent } from './promotions/promotions.component';
import { PhotosHomeComponent } from './photos-home/photos-home.component';
import { LaptopHomeComponent } from './laptop-home/laptop-home.component';
import { LaploplistHomeComponent } from './laploplist-home/laploplist-home.component';
import { FullproductComponent } from './fullproduct/fullproduct.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    LaptoplistComponent,
    LaptopComponent,
    LeftbarComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    CartComponent,
    PromotionsComponent,
    PhotosHomeComponent,
    LaptopHomeComponent,
  LaploplistHomeComponent,
  FullproductComponent,
  SignupUserComponent,
  UserComponent,
  FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
