import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogin = false;
  constructor(
    private appService: AppService
  ) {
  }
  ngOnInit(): void {
    this.appService.loginEvent.subscribe((res) => {
      this.isLogin = true;
      console.log(res);
    });
  }

  title = 'careerwill';
}
