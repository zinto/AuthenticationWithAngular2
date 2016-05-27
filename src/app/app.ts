// src/app/app.ts

import {Component} from '@angular/core';
import {RouteConfig, RouterLink, Router} from '@angular/router-deprecated';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';

@Component({
  // HTML selector for this component
  selector: 'auth-app'
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [LoggedInRouterOutlet]
})

@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: Home, as: 'Home' },
  { path: '/login', component: Login, as: 'Login' },
  { path: '/signup', component: Signup, as: 'Signup' }
])

export class App {

  constructor() {}
}