import { Component, OnInit } from '@angular/core';
// import { Laptops } from 'Classes/Laptop';

// import { LaptopsService } from 'app/laptops.service';
import { Laptops } from 'src/Classes/Laptop';
import { LaptopsService } from '../laptops.service';

@Component({
  selector: 'app-laploplist-home',
  templateUrl: './laploplist-home.component.html',
  styleUrls: ['./laploplist-home.component.css']
})
export class LaploplistHomeComponent {

      LaplopList!: Laptops[];
      filteredProducts:Laptops[]=[]
      constructor(private service:LaptopsService)
      {

      }
      
 
      filteredProducts$ = this.service.filteredProducts$; 

      // private filteredProductsSubscription: Subscription;

      // laptopsList:Laptops[]=[]
      ngOnInit(): void {
          this.service.initializeProducts();
            //it's called every time i emit value by observable(next method)
          this.filteredProducts$.subscribe(
            //res represents the array of json recieved
            (res:Laptops[]) => {
            //reset the list
            this.filteredProducts=[]
            for(let i=0;i<res.length;i++){
              
              let lap=new Laptops(Number(res[i].id),res[i].brand,Number(res[i].price),res[i].screen,Number(res[i].ram),res[i].gpu,Number(res[i].storage),res[i].processor,res[i].photo)
              Object.assign(lap,{quantity:1,total:lap.price});
    
              this.filteredProducts.push(lap);}  

    
            })
      }

}
