import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // isLoggedIn:  boolean;
  loginEvent = new EventEmitter();
  buyCourseModal = false;
  classTimeModal = false;
  //new BehaviorSubject(false);
  constructor() {
    // this.loginEvent.next(false);
    // this.isLoggedIn = false;
  }
}
