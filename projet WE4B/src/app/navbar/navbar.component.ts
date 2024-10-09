import { Component } from '@angular/core';
import { AuthGuard } from 'src/Classes/auth.guard';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(protected auth:AuthService,private route:Router,public cartService : CartService){}
  logout(){
    this.auth.logout();
    
  }
  logoutClient(){
    this.auth.logoutClient();
  }

}
