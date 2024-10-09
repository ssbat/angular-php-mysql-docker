import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LaptopsService } from '../laptops.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  listOrders:any=[{name:""}];
  noOrders:Boolean=false;
  constructor(public auth:AuthService,public route:Router,public service:LaptopsService,public cart:CartService){}
  ngOnInit(): void {
    console.log(this.auth.isAuthenticatedClient);
    if(this.auth.isAuthenticatedClient==false){
      this.route.navigate(["/signup"])
    }

    this.getOrder();
  }
  getOrder(){
    this.service.getProductperClient(this.auth.getClientId()).subscribe((result:any)=>
      {
        console.log(result);
        if(result[0])
        {
          if(result[0].brand==null){
            this.noOrders=true;
            this.listOrders=result
          }
          else{
            this.noOrders=false
            this.listOrders=result
            console.log("$$$$$$$$$$");
          console.log(result);
          }
        }  
      });
  }
  

}
