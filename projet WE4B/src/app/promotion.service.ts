import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  laptops_pro = [
    { id: 117, brand: 'ASUS Zenbook 14 Flip', price: 1299, screen: 13, ram: 16, gpu: 'Intel® Iris® Xe', storage: 520, processor: "I7", photo: './assets/images/tablet.png',quantity:0,total:0 },
    { id: 118, brand: 'Acer Chromebook Spin 514', price: 499, screen:13, ram: 8, gpu: 'AMD Radeon™ Graphics', storage: 240, processor: "I3", photo: './assets/images/tablet2.webp' ,quantity:0,total:0 },
    // { id: 3, brand: 'Laptop 3', price: 2000, screen: 14, ram: 32, gpu: 'NVIDIA RTX 3080', storage: 2, processor: "1",photo: '..',quantity:0,total:0  },
  ];

  laptops_gamer = [
    { id: 122, brand: 'MSI Katana 17', price: 1379, screen: 17, ram: 16, gpu: 'NVIDIA RTX 4050', storage: 512, processor: "I5", photo: './assets/images/gaming1.jpg',quantity:0,total:0 },
    { id: 123, brand: 'Lenovo IdeaPad Gaming 3', price: 849, screen: 15, ram: 16, gpu: 'NVIDIA RTX 3060', storage: 512, processor: "I5", photo: './assets/images/gaming2.jpg' ,quantity:0,total:0 },
    // { id: 2, brand: 'Laptop 2', price: 3700, screen: 17.3, ram: 16, gpu: 'NVIDIA RTX 2070', storage: 1, processor: "1", photo: '..',quantity:0,total:0  }
  ];
}
