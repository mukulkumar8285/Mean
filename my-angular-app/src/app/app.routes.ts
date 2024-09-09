import { Routes } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginuserComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
