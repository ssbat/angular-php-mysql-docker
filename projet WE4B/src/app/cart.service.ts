import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Laptops } from 'src/Classes/Laptop';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : Laptops[] =[]
  public productList = new BehaviorSubject<any>([]);


  constructor(public route:Router) { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    // product.quantity+=1;
    // product.total=product.quantity*product.price
    // if(!this.cartItemList.includes(product))
    let trouver:Boolean=false
    for(let i=0;i<this.cartItemList.length;i++){
      if(this.cartItemList[i].id==product.id){
        trouver=true
        this.cartItemList[i].quantity=Number(this.cartItemList[i].quantity)+1
        this.cartItemList[i].total=this.cartItemList[i].price*this.cartItemList[i].quantity

      }
    }
    if( !trouver)
    {
      // console.log("NEW");
      product.quantity=1
      product.total=product.quantity*product.price
      this.cartItemList.push(product);
    }
    // else{}
    
    console.log("NEXT");
    this.getTotalPrice();
    this.productList.next(this.cartItemList);

    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;

    this.cartItemList.map((a:any)=>{
      grandTotal += Number(a.total);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    //modification de productList
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  getNombreOfCart(){
    return this.cartItemList.length
  }
  misejourquantity(index:number,quantity:number){
    this.getTotalPrice()
    console.log(quantity);
    this.cartItemList[index].quantity=quantity
    this.cartItemList[index].total=quantity*this.cartItemList[index].price
    this.productList.next(this.cartItemList)
  }
 
}
