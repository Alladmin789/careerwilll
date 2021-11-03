import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDropdownOpened = false

  constructor(
    public appService: AppService
  ) {
  }


  ngOnInit(): void {
  }

  openDropdown() {
    this.isDropdownOpened = !this.isDropdownOpened
  }

  openNotificationModal() {
    this.appService.notificationModal = true
  }

}
