import { Component,ViewChild,OnInit,AfterViewInit } from '@angular/core';
import { LaptoplistComponent } from '../laptoplist/laptoplist.component';
import { Laptops } from 'src/Classes/Laptop';
import { LaptopsService } from '../laptops.service';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit  {
    // @ViewChild(LaptoplistComponent, { static: false }) child!: LaptoplistComponent;
    myForm!: FormGroup;

    listFilters:string[][]=[];
    listFiltersProperName:string[]=[];

    params = new HttpParams();
    numberOfFilters:number=0
    isChecked:Boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false]

    nbFiltersCpu=3;
    nbFiltersPrice=this.nbFiltersCpu+4;
    nbFiltersRam=this.nbFiltersPrice+3;
    nbFilersScreen=this.nbFiltersRam+3;

  
    constructor(private productService: LaptopsService,private formBuilder: FormBuilder) {}
    ngOnInit(): void {
      this.myForm = this.formBuilder.group({
        checkboxValue: false  // Set the initial value of the checkbox
      });
    }
    applyFilter(filters:any[][]) {
      const filterOptions = {/* Implement your filter options logic here */};
      this.productService.applyFilter(filters);
    }
    applyFilter2() {
      const filterOptions = {/* Implement your filter options logic here */};
      this.productService.initializeProducts();
    }
    onChange($event:any){
      this.updateTitle()
      if($event.target.checked){
        console.log($event.target.name);
   
        
        // console.log($event.target.name);
        this.listFilters.push([$event.target.name,$event.target.value])
        console.log(this.listFilters);
        this.applyFilter(this.listFilters)
        this.numberOfFilters++

  
      }else{
        // this.listFiltersProperName.remove
        this.listFilters=this.listFilters.filter((obj)=>{return obj[1]!==$event.target.value})
      this.productService.applyFilter(this.listFilters);
      this.numberOfFilters--


  
        console.log(this.listFilters);
      }
    }
    isCollapsed: boolean = true;
    isCollapsed2: boolean = true;
    isCollapsed3: boolean = true;
    isCollapsed4: boolean = true;
  
  
  
  
    toggleCollapse(number:number) {
  
    if(number==1)this.isCollapsed = !this.isCollapsed;
    if(number==2)this.isCollapsed2 = !this.isCollapsed2;
    if(number==3)this.isCollapsed3 = !this.isCollapsed3;
    if(number==4)this.isCollapsed4 = !this.isCollapsed4;
    }
  
  
    
  reset(){
    for(let i=0;i<this.isChecked.length;i++){
      this.isChecked[i]=false;
    }
    this.numberOfFilters=0
    this.listFilters=[]
    this.applyFilter(this.listFilters)
    this.listFiltersProperName=[]
    // this.isChecked.forEach()
  }
updateTitle()
{
    
        // CPU
        let trouver=false;
        for(let i=0;i<this.nbFiltersCpu;i++){
          if(this.isChecked[i]==true){
            trouver=true
            // this.listFiltersProperName.push("CPU")
            // console.log("^^^^^^^^");
          }
        }
        if(trouver){ 
            let already=false
            this.listFiltersProperName.forEach((param=>{if(param=="CPU")already=true}))
            if(!already)this.listFiltersProperName.push("CPU")
          // this.listFiltersProperName.push("CPU")
        }
        else this.listFiltersProperName.forEach((element, index) => {if (element == "CPU") {this.listFiltersProperName.splice(index, 1);}
      });

      //  PRICE
      trouver=false;
      for(let i=this.nbFiltersCpu;i<this.nbFiltersPrice;i++){
         if(this.isChecked[i]==true){
           trouver=true
         }
       }
       if(trouver){ 
        let already=false
        this.listFiltersProperName.forEach((param=>{if(param=="PRICE")already=true}))
        if(!already)this.listFiltersProperName.push("PRICE")
       }
       else this.listFiltersProperName.forEach((element, index) => {if (element == "PRICE") {this.listFiltersProperName.splice(index, 1);}
      });

      // RAM
      trouver=false;
      for(let i=this.nbFiltersPrice;i<this.nbFiltersRam;i++){
         if(this.isChecked[i]==true){
           trouver=true
         }
       }
       if(trouver){ 
        let already=false
        this.listFiltersProperName.forEach((param=>{if(param=="RAM")already=true}))
        if(!already)this.listFiltersProperName.push("RAM")
       }
       else  this.listFiltersProperName.forEach((element, index) => {if (element == "RAM") {this.listFiltersProperName.splice(index, 1);}
      });

      // SCREEN
      trouver=false;
      for(let i=this.nbFiltersRam;i<this.nbFilersScreen;i++){
         if(this.isChecked[i]==true){
           trouver=true
         }
       }
       if(trouver){ 
        let already=false
        this.listFiltersProperName.forEach((param=>{if(param=="SCREEN")already=true}))
        if(!already)this.listFiltersProperName.push("SCREEN")
       }
       else  this.listFiltersProperName.forEach((element, index) => {if (element == "SCREEN") {this.listFiltersProperName.splice(index, 1);}
      });
      
      console.log("&^%&$&$");
      console.log(this.listFiltersProperName);
  }


  
    
  removeFilter(type:string){
   
    if(type=="CPU")
    {
      console.log(this.listFilters);
      // XMLHttpRequestEventTarget
      for(let i=0;i<this.listFilters.length;i++){
  
        this.listFilters.forEach((element, index) => {if (element[0] == "processor[]") { ;this.listFilters.splice(index, 1); this.numberOfFilters--;} });
        this.listFilters.forEach((element, index) => {if (element[0] == "processor[]") { ;this.listFilters.splice(index, 1); this.numberOfFilters--;} });

        this.listFiltersProperName.forEach((element, index) => {if (element == "CPU") {this.listFiltersProperName.splice(index, 1);} });
        for(let i=0;i<this.nbFiltersCpu;i++){
          this.isChecked[i]=false;
        }
        console.log("$@$");
        console.log(this.listFilters);

        this.applyFilter(this.listFilters)
        
      }


    }
    if(type=="PRICE")
    {
      console.log(this.listFilters);
      // XMLHttpRequestEventTarget
      for(let i=0;i<this.listFilters.length;i++){
  
        this.listFilters.forEach((element, index) => {if (element[0] == "price[]") { console.log("$@$");;this.listFilters.splice(index, 1);this.numberOfFilters--; ;} });
        this.listFilters.forEach((element, index) => {if (element[0] == "price[]") { console.log("$@$");;this.listFilters.splice(index, 1);this.numberOfFilters--; ;} });
        this.listFilters.forEach((element, index) => {if (element[0] == "price[]") { console.log("$@$");;this.listFilters.splice(index, 1);this.numberOfFilters--; ;} });
        
        this.listFiltersProperName.forEach((element, index) => {if (element == "PRICE") {this.listFiltersProperName.splice(index, 1);} });
        for(let i=this.nbFiltersCpu;i<this.nbFiltersPrice;i++){
          this.isChecked[i]=false;
        }
        this.applyFilter(this.listFilters)
        
      }

    }
    if(type=="RAM")
    {
      console.log(this.listFilters);
      // XMLHttpRequestEventTarget
      for(let i=0;i<this.listFilters.length;i++){
  
        this.listFilters.forEach((element, index) => {if (element[0] == "ram[]") { console.log("$@$");;this.listFilters.splice(index, 1);this.numberOfFilters--; ;} });
        this.listFilters.forEach((element, index) => {if (element[0] == "ram[]") { console.log("$@$");;this.listFilters.splice(index, 1);this.numberOfFilters--; ;} });
        
        this.listFiltersProperName.forEach((element, index) => {if (element == "RAM") {this.listFiltersProperName.splice(index, 1);} });
        for(let i=this.nbFiltersPrice;i<this.nbFiltersRam;i++){
          this.isChecked[i]=false;
        }
        this.applyFilter(this.listFilters)
        
      }

    } 
    if(type=="SCREEN")
    {
      console.log(this.listFilters);
      // XMLHttpRequestEventTarget
      for(let i=0;i<this.listFilters.length;i++){
  
        this.listFilters.forEach((element, index) => {if (element[0] == "screen[]") { console.log("$@$");;this.listFilters.splice(index, 1);this.numberOfFilters--; ;} });
        this.listFilters.forEach((element, index) => {if (element[0] == "screen[]") { console.log("$@$");;this.listFilters.splice(index, 1);  this.numberOfFilters--;}});

        this.listFiltersProperName.forEach((element, index) => {if (element == "SCREEN") {this.listFiltersProperName.splice(index, 1);} });
        for(let i=this.nbFiltersRam;i<this.nbFilersScreen;i++){
          this.isChecked[i]=false;
        }
        this.applyFilter(this.listFilters)
        
      }

    }
  
  
    



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