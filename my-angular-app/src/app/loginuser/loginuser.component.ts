import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {
  // User login and signup data
  loginData = {
    username: '',
    password: '',
  };

  constructor(private loginService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.loginData.username && this.loginData.password) {
      this.loginService.login(this.loginData).subscribe(
        response => {
          console.log("Login successful");
          this.router.navigate(['/dashboard']); 
        },
        error => {
          console.log("Error during login");
        }
      );
    }else{
      alert("Please enter both username and password");
    }
  }
}
