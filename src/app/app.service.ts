import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isLoggedIn:  boolean;
  constructor() {
    this.isLoggedIn = false;
  }
}
