import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Laptops } from 'src/Classes/Laptop';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit 

{
  @Output() callParentFunction: EventEmitter<any> = new EventEmitter();
  @Output() callParentFunction2: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
      
  }
  @Input() laptop!:Laptops;
  readMore() {
    this.router.navigate(['/', 'products', this.laptop.id])
    }

  constructor(public router:Router){
  }

  addtocart(param:any) {
    this.callParentFunction.emit(param);
    this.callParentFunction2.emit();
  }
  


}
