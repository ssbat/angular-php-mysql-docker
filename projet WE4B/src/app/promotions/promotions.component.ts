import { Component, OnInit } from '@angular/core';
// import { Laptops } from 'Classes/Laptop';
// import LaptopsService
// import { LaptopsService } from '../laptops.service';
import { Laptops } from 'src/Classes/Laptop';
import { LaptopsService } from '../laptops.service';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit{
  
  
  laptops_pro = this.service.laptops_pro
  laptops_gamer =this.service.laptops_gamer

  constructor(private service:PromotionService)
  {

  }
  
  ngOnInit(): void {

  }




  getData(CollapseiD : number): void{
    /*Récupérer les données selon le numéro du collapse*/
  }

  
  




}

    

