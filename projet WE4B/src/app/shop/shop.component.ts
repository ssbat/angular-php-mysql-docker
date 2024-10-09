import { Component,OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { LaptopsService } from '../laptops.service';
import { map } from 'rxjs';
import { Laptops } from 'src/Classes/Laptop';
import { TypeofExpr } from '@angular/compiler';
import { LaptoplistComponent } from '../laptoplist/laptoplist.component';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit  {
  @ViewChild(LaptoplistComponent, { static: false }) child!: LaptoplistComponent;


  ngOnInit(): void {
      
  }
  // ngAfterViewInit() {
  //   // Ensure sourceComponent is defined
  //   if (this.child) {
  //     this.child.print();
  //   }
  // }

  // call_Print():void {
  //   console.log("mhamad");
  //   if (this.child) {
  //     this.child.test();
  //   }
  // }
  // call_Print2():void {
  //   console.log("mhamad");
  //   if (this.child) {
  //     this.child.test2();
  //   }
  // }

  
  
}
