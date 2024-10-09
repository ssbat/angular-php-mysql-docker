import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css']
})
export class PhotosHomeComponent implements OnInit {

    img1!: string;
    img2!: string;
    img3!: string;

    ngOnInit(): void {
        this.img1 = "/assets/images/slider2.webp";
        this.img2 = "/assets/images/slider3.webp";
        this.img3 = "/assets/images/slider1.webp";    
    }

    /*changePhoto(): void{

      if(this.img == "https://i.imgur.com/K7A78We.jpg")
      {
        this.img = "../assets/images/laptop3.png";
      }
      else if(this.img == "../assets/images/laptop3.png"){
        this.img = "https://i.imgur.com/K7A78We.jpg";
      }

    }*/
}
