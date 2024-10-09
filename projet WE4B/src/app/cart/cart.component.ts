import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import {  ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LaptopsService } from '../laptops.service';
import { AuthService } from '../auth.service';
import { Laptops } from 'src/Classes/Laptop';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @ViewChild('summaryDiv') summaryDiv!: ElementRef;

  public products : any = [];
  public grandTotal !: number;
  public shippingcharge:number=5;
  public offre:number=0;
  public inputValue:string='';
  public codeValid:boolean=false

  constructor(private cartService : CartService,public route:Router,public service:LaptopsService,public auth:AuthService) { }

  ngOnInit(): void {
    //a chaque modification de (productList:observable) le subscrive va etre executer
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.cartService.getNombreOfCart())
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  setquantity(index:number){
    console.log(index);
    this.cartService.misejourquantity(index,this.products[index].quantity)
  }
  incrementquantity(index:number){
    this.products[index].quantity+=1;
    this.cartService.misejourquantity(index,this.products[index].quantity)
  }
  decrementquantity(index:number){
    this.products[index].quantity-=1;
    if(this.products[index].quantity==0){
      this.removeItem(this.products[index])
    }
    else{
      this.cartService.misejourquantity(index,this.products[index].quantity)

    }
  }
  toshop(){
    this.route.navigate(["/shop"]);
  }
  shipping($event:any){
    if($event.target.value==1){
      this.shippingcharge=5
    }else{
      this.shippingcharge=8;
    }
  }
  onInputChange(){
    if(this.inputValue=="KAS2023"){
      this.offre=-10;
      this.codeValid=true
    }
    else{
      this.offre=0
      this.codeValid=false
    }
  }
  downloadSummary(): void {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: [800, 1200]
    });
  
    const element = this.summaryDiv.nativeElement;
  
    html2canvas(element).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
  
      doc.addImage(imageData, 'PNG', 10, 10, 780, 1180); // Adjust the positioning and dimensions as needed
  
      doc.save('summary.pdf');
    });

    this.products.forEach((Laptop:Laptops) => {
      if(this.auth.getClientId()){

        this.service.setProductperClient(this.auth.getClientId(),String(Laptop.id)).subscribe()
      }
    });

  }
  // offre(){

  // }
}
