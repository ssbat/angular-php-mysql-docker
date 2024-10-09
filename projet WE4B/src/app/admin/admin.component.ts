import { Component, OnInit } from '@angular/core';
import { Laptops } from 'src/Classes/Laptop';
import { LaptopsService } from '../laptops.service';
import { Subscription } from 'rxjs';
// import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Products: Laptops[] = [];
  Products$ = this.service.filteredProducts$;
  CreateLaptop:any={
    brand:'',
    price:'',
    cpu:'',
    filedate:undefined,
    gpu:'',
    screen:'',
    ram:'',
    storage:""
  }
selectedFile!: File ;

  // file:string
  filedata:any;
  capital:number=0

  ngOnInit(): void {


    this.service.initializeProducts();
                    //it will be called each time the observable product emmited a value(next)
    this.Products$.subscribe((res:Laptops[]) => {
      this.Products=[]
      this.capital=0;
      for(let i=0;i<res.length;i++){
        this.Products.push(new Laptops(Number(res[i].id),res[i].brand,Number(res[i].price),res[i].screen,Number(res[i].ram),res[i].gpu,Number(res[i].storage),res[i].processor,res[i].photo));
        this.capital+=Number(res[i].price);
      }  
        console.log(this.Products);
     
       //can cause problems with the append to the list
        this.CreateLaptop = {
                brand: '',
                price: ''
              };
     
      })
  }
  constructor(public service:LaptopsService){
    
  }

submit() {
  console.log(this.CreateLaptop.cpu);
  this.service.createProduct2(this.CreateLaptop);

}
fileEvent(e:any){
  this.CreateLaptop.filedata = e.target.files[0];
}
deleteProduct(id:number){
  console.log(id);
  this.service.deleteProductService(id)

}



}
