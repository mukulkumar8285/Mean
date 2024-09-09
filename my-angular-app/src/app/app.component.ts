import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import {HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , LoginuserComponent , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
