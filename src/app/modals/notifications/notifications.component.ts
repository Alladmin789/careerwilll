import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(
    public appService: AppService
    
  ) { }

  ngOnInit(): void {
  }

  closeNotificationModal(){
    this.appService.notificationModal = false
  }

}
