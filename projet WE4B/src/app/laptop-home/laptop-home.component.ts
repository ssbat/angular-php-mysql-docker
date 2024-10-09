import { Component, Input, OnInit } from '@angular/core';
// import { Laptops } from 'src/Classes/Laptop';
import { Laptops } from 'src/Classes/Laptop';
import { LaptopsService } from '../laptops.service';
@Component({
  selector: 'app-laptop-home',
  templateUrl: './laptop-home.component.html',
  styleUrls: ['./laptop-home.component.css']
})
export class LaptopHomeComponent implements OnInit {

  @Input() laptop!: Laptops;
  ngOnInit(): void {
      
  }

}
