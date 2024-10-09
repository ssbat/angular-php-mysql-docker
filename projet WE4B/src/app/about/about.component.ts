import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  img! : string
  ngOnInit(): void {
      this.img = "/assets/images/image-about-us.png";
  }
}
