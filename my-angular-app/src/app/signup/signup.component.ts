import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule , HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupData = {
    username: '',
    password: '',
    fullName: '',
    email: '',
  };

  constructor(private loginService: AuthService, private router: Router) { }

  onSubmitsignup() {
    if (this.signupData.username && this.signupData.password && this.signupData.fullName && this.signupData.email) {
      this.loginService.signup(this.signupData).subscribe(
        response => {
          console.log("Signup successful");
          // Navigate to login page or another page after successful signup
          this.router.navigate(['/login']); // Adjust the route as per your app
        },
        error => {
          console.log("Error during signup");
        }
      );
    }else{
      alert("Please fill all the fields");
    }
  }
}
