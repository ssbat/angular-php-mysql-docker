import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopsService } from '../laptops.service';
import { Laptops } from 'src/Classes/Laptop';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fullproduct',
  templateUrl: './fullproduct.component.html',
  styleUrls: ['./fullproduct.component.css']
})
export class FullproductComponent implements OnInit {
  prd_idx! : number
product!:Laptops
constructor(private activatedroute: ActivatedRoute,public  service: LaptopsService,private cartService : CartService) 
{
  this.product=new Laptops();
}

ngOnInit(): void {

    this.prd_idx= parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0')
    this.service.getPrdByIndex(this.prd_idx).subscribe((data=>this.product=new Laptops(data[0].id,data[0].brand,data[0].price,data[0].screen,data[0].ram,data[0].gpu,data[0].storage,data[0].processor,data[0].photo)
    ))
}
addtocart(item: any){
  // console.log(item);
  // Object.assign(item,{quantity:1,total:Number(item.price)});

  this.cartService.addtoCart(item);
}
}
