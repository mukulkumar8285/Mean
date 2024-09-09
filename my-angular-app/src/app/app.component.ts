import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import {HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet  ,RouterLink , LoginuserComponent , HttpClientModule , SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
