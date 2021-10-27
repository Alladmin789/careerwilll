import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router:Router,
    public appService: AppService  
  ) { }

  ngOnInit(): void {
  }

  goToVotes($myParam: string = ''): void {
    this.appService.loginEvent.next(true);
    const navigationDetails: string[] = ['dashboard'];
    this.router.navigate(navigationDetails);
  }

}
