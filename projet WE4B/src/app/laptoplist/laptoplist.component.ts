import { AfterViewInit, Component,OnInit} from '@angular/core';
import { Laptops } from 'src/Classes/Laptop';
import { LaptopsService } from '../laptops.service';
import { Subscription, count, map } from 'rxjs';
import { CartService } from '../cart.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrls: ['./laptoplist.component.css'],
  animations: [
    trigger('flashAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('1000ms')),
      transition('hidden => visible', animate('1000ms')),
    ]),
  ]
})
export class LaptoplistComponent implements OnInit{
  
  filteredProducts: Laptops[] = [];
  
  selectedOption: string="test";
  
    currentPage: number = 1;
    itemsPerPage: number = 6;
    totalPages: number = 0;
    displayedProducts: Laptops[] = [];
  isDropdownOpen: boolean = false;
  // Observable of filtered products
  filteredProducts$ = this.service.filteredProducts$; 

  // private filteredProductsSubscription: Subscription;
  constructor(public service:LaptopsService, private cartService : CartService){

  }
  // laptopsList:Laptops[]=[]
  ngOnInit(): void {
      console.log("I am called");
      this.service.initializeProducts();
        //it's called every time i emit value by observable(next method)
      this.filteredProducts$.subscribe(
        //res represents the array of json recieved
        (res:Laptops[]) => {
        //reset the list
        this.filteredProducts=[]
        for(let i=0;i<res.length;i++){
          
          let lap=new Laptops(Number(res[i].id),res[i].brand,Number(res[i].price),res[i].screen,Number(res[i].ram),res[i].gpu,Number(res[i].storage),res[i].processor,res[i].photo)
          // Object.assign(lap,{quantity:1,total:lap.price});

          this.filteredProducts.push(lap);}  
          console.log(this.filteredProducts);
          this.test()
          this.calculateTotalPages();
          if(this.crois){
            this.trierOrdreCroissant()
          }
          if(this.decrois){
            this.trierOrdreDecroissant()
          }

          this.updateDisplayedProducts();

        })
  }
  test(): void {
    console.log("fuk");
    if (this.filteredProducts.length > 0) {
      console.log(this.filteredProducts[2]?.price);
    }
  }
  addtocart(item: any){
    console.log(item.quantity+"%%%%%%");
    this.cartService.addtoCart(item);
  }
  handleFunctionCall(param:any) {
    console.log(param);
  }
  public i=0
  trierOrdreCroissant(){
    console.log("hi");
    this.filteredProducts.sort((a, b) => {
      return a.price - b.price;
    });
  }
  trierOrdreDecroissant(){
    this.filteredProducts.sort((a, b) => {
      return b.price - a.price;
    });
  }
  crois:boolean=false
  decrois:boolean=false
  
  trier(option:any){
    if(option.target.value=='cr'){
      this.trierOrdreCroissant()
      this.updateDisplayedProducts()
      this.crois=true
      this.decrois=false
    }
    else{
      this.trierOrdreDecroissant()
      this.updateDisplayedProducts()

      this.decrois=true
      this.crois=false
    }
  }
  
  
  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }
  
  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex =Math.min(startIndex + this.itemsPerPage, this.filteredProducts.length);
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }
  
  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedProducts();
      
    }
  }
  getStartIndex(): number {
    console.log("!");
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }
  
  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredProducts.length);
  }
  
  getTotalResults(): number {
    return this.filteredProducts.length;
  }



  flashState = 'hidden';

  flashList() {
    console.log('Flash list button clicked');

    this.flashState = 'visible';
    setTimeout(() => {
      this.flashState = 'hidden';
    }, 1000);
  }
  
  
  
  // this.service.getData().pipe(map(data=>data)).subscribe((res:any)=>{
    //   // console.log(res.length);
//   for(let i=0;i<res.length;i++){
//     this.laptopsList.push(new Laptops(res[i].id,res[i].brand,res[i].price,res[i].screen,res[i].ram,res[i].gpu,res[i].storage,res[i].processor,res[i].photo))
//   }
//   for(let i=0;i<res.length;i++){
  //     console.log(this.laptopsList[i]);
  //   }
  // });
  
  // }
  // test():void{
    //   this.laptopsList=[]
    //   this.service.getData2().pipe(map(data=>data)).subscribe((res:any)=>{
      //     // console.log(res.length);
      //     for(let i=0;i<res.length;i++){
        //       this.laptopsList.push(new Laptops(res[i].id,res[i].brand,res[i].price,res[i].screen,res[i].ram,res[i].gpu,res[i].storage,res[i].processor,res[i].photo))
        //     }
        
        //     for(let i=0;i<res.length;i++){
          //       console.log(this.laptopsList[i]);
          //     }
//   });
// }
// test2():void{
  //   this.laptopsList=[];
  //   this.ngOnInit();
  // }
  // public print():void{
    //   console.log("hiiii");
    // }
  }
  
  
  //it's called every time i emit value by observable(next method)
//  this.filteredProducts$.subscribe(
//   //res represents the array of json recieved
//   (res:Laptops[]) => {
//   //reset the list
//   this.filteredProducts=[]
//   for(let i=0;i<res.length;i++){
    
//     let lap=new Laptops(Number(res[i].id),res[i].brand,Number(res[i].price),res[i].screen,Number(res[i].ram),res[i].gpu,Number(res[i].storage),res[i].processor,res[i].photo)
//     Object.assign(lap,{quantity:1,total:lap.price});

//     this.filteredProducts.push(lap);}  
//     console.log(this.filteredProducts);
//     this.test()
//   })
// console.log()
// }
// test(): void {
//   console.log("fuk");
// if (this.filteredProducts.length > 0) {
//   console.log(this.filteredProducts[2]?.price);
// }
// }
// addtocart(item: any){
//   // console.log(item);
//   this.cartService.addtoCart(item);
// }
// handleFunctionCall(param:any) {
//   console.log(param);
// }