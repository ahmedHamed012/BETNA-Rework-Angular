import { Routes, Route } from '@angular/router';
import { HomePageComponent } from './Modules/home-page/home-page.component';
import { LoginComponent } from './Modules/authentication/login/login.component';

export const routes: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
];
