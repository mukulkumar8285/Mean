import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import {HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [FormsModule, HttpClientModule ], 
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css'] 
})
export class LoginuserComponent {
  loginData = {
    username: '',
    password: '',
  };

  constructor(private loginService: AuthService) { }
  onSubmit() {
    if(this.loginData.username && this.loginData.password) {
      this.loginService.login(this.loginData).subscribe(
        response=>{
          console.log("login successfull");
          // this.router.na  pending
         },
        error => {
          console.log("error in login");
        }
      )
  }
}
}
