import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"
import { Laptops } from 'src/Classes/Laptop';
import { BehaviorSubject, Observable, catchError, map, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  private filteredProductsSubject = new BehaviorSubject<Laptops[]>([]);
  filteredProducts$ = this.filteredProductsSubject.asObservable();
  numberOfFilters:number=0


  fetchProducts(): Observable<Laptops[]> {
    
    return this.http.get<Laptops[]>("http://localhost:8080/view.php");
  }

  fetchFilteredProducts(filterOptions:any[][]=[["id","1"]]): Observable<Laptops[]> {
    let params = new HttpParams();
    filterOptions.forEach(obj=>params=params.append(obj[0],obj[1]))
    console.log(params);

  
    
    return this.http.get<Laptops[]>("http://localhost:8080/viewFilter.php",{params});
  }
  createProduct(product: any){
    console.log("createProduct is called");
    console.log(product);
    const url = 'http://localhost:8080/create.php';

    // Create form data
    const formData = new FormData();
    formData.append('brand', product.brand);
    formData.append('price', product.price);
    formData.append('processor', product.cpu);
    formData.append('screen', product.screen);
    formData.append('ram', product.ram);
    formData.append('gpu', product.gpu);
    formData.append('storage', product.storage);


    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    formData.append('image',product.filedata);
    console.log(product.filedata);
    // Send the POST request 
    return this.http.post<any>(url, formData);
                                                    //elt it will be the retrieved json file
    // this.http.post<any>(url, formData).subscribe((elt:any)=>console.log(elt))
  }

  initializeProducts() {
                //subscribe to the api
    this.fetchProducts().subscribe((products:Laptops[]) => {

        //now each time i call next(products) the filteredProducts$.subscribe(etc...) will be executed
      this.numberOfFilters=0
        this.filteredProductsSubject.next(products);
      
    });

  }
  applyFilter(filterOptions:any[][]=[["id","1"]]) {
    
    //subscribe to the api
    this.fetchFilteredProducts(filterOptions).subscribe(
    (filteredProducts) => {
      this.numberOfFilters=filterOptions.length

      //now each time i call next(products) the filteredProducts$.subscribe(etc...) will be executed
      this.filteredProductsSubject.next(filteredProducts);
    });
  }

  constructor(private http:HttpClient) {}

  createProduct2(product: any) {
    //product is created
    // this.createProduct(product);
  
    // Subscribe to the createProduct() method
    this.createProduct(product).subscribe(() => {
      // Fetch the updated product list
      this.fetchProducts().subscribe((products: Laptops[]) => {
        // Update the filtered product list
        this.filteredProductsSubject.next(products);
      });
    });
  }
  deleteProduct(id:number){
    const url = 'http://localhost:8080/delete.php';

    // Create form data
    const formData = new FormData();
    formData.append('id', String(id));
    return this.http.post<any>(url, formData);



  }
  deleteProductService(id:number){
    this.deleteProduct(id).subscribe(()=>{
      this.fetchProducts().subscribe((products:Laptops[])=>{
        this.filteredProductsSubject.next(products);
    })
    })

  }
  //   }),
  //   catchError((error: any) => {
  //     console.error('Product creation failed:', error);
  //     return throwError(error); // Rethrow the error for further handling
  //   })
  // );

  
  getPrdByIndex(prd_idx: number): Observable<Laptops[]> {
    return this.http.get<Laptops[]>("http://localhost:8080/viewFilter.php?id[]="+prd_idx);
  }

  createUser(client:any){
    const url = 'http://localhost:8080/create_client.php';

    // Create form data
    const formData = new FormData();
    formData.append('name', client.name);
    formData.append('email',client.email );
    formData.append('password',client.password );
    this.http.post<any>(url, formData).subscribe();
  }



  getProductperClient(id:string|null):Observable<any[]>{
    const url = 'http://localhost:8080/getOrders.php';
    // Create form data
    const formData = new FormData();
    // formData.append('name', client.name);
    formData.append('id',String(id));
    // formData.append('password',client.password );
    return this.http.post<any>(url, formData)
  }
  setProductperClient(client_id:string|null,product_id:string){
    const url = 'http://localhost:8080/createOrder.php';
    const formData = new FormData();
    formData.append('product_id',String(product_id));
    formData.append('client_id',String(client_id));
    return this.http.post<any>(url, formData)






  }








  getData(){
    // console.log("hi kifak");
    // console.log(this.http.get("http://localhost:8080/view.php").subscribe(res=>{console.log(res);}));
    return this.http.get("http://localhost:8080/view.php");

  }
  getData2(data:string="?id=1"){
    // console.log("hi kifak");
    // console.log(this.http.get("http://localhost:8080/view.php").subscribe(res=>{console.log(res);}));
    // return this.http.get("http://localhost:8080/filtre.php");
    return this.http.get("http://localhost:8080/viewFilter.php");
  }


}
  









