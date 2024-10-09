import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  constructor(private authService: AuthService, private router: Router){}
  ngOnInit(): void {
    this.testlogin();
  }

  signinObj:any={
    email:'',
    password:''
  }
  testlogin(){
    if(this.authService.isAuthenticatedAdmin){
        this.router.navigate(["/"])
    }
  }
  
  submit(){
    console.log();
    this.authService.login(this.signinObj).subscribe((response:any) => {
      if (response.result === 'success') {
        // alert("sucess")
        this.authService.isAuthenticatedAdmin = true;
        this.authService.setAuthStatusAdmin(true);
        this.router.navigate(['/admin']);
      } else {
        alert("failed")

        // Login failed
        // Show error message or perform any other actions
      }
    }, error => {
      console.log(error);
      // Handle error cases here
    });
  }
}

