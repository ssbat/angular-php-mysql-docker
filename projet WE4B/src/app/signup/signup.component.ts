import { Component } from '@angular/core';
import { LaptopsService } from '../laptops.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('flashAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('1000ms')),
      transition('hidden => visible', animate('1000ms')),
    ]),
  ]
})
export class SignupComponent {
  CreateUser:any={
    name:'',
    email:'',
    password:'',
  }
  SignUser:any={
    email:'',
    password:'',
  }
  showReplacement = false;

  constructor(public service:LaptopsService,public authService:AuthService,public route:Router){}
  submit(){
    this.service.createUser(this.CreateUser);
    this.flashList();

  }
  submit2() {
    console.log();
    this.authService.loginClient(this.SignUser).subscribe((response: any) => {
      if (response.result === 'success') {
        // alert("sucess")
        this.flashList();
        this.authService.setAuthStatusClient(true, response.id);
        console.log( response.id);
        this.route.navigate(["/user"])
      } else {
        alert("failed")
      }
    })
  }
  
  flashState = 'hidden';
  
  flashList() {
    console.log('Flash list button clicked');
    
    this.flashState = 'visible';
    setTimeout(() => {
      this.flashState = 'hidden';
    }, 1000);
  }
  
}