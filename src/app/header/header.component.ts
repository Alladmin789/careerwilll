import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDropdownOpened = false

  constructor() {
  }


  ngOnInit(): void {
  }

  openDropdown() {
    this.isDropdownOpened = !this.isDropdownOpened
  }

}
