import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-class-time-table',
  templateUrl: './class-time-table.component.html',
  styleUrls: ['./class-time-table.component.scss']
})
export class ClassTimeTableComponent implements OnInit {

  constructor(
    public appService: AppService

  ) { }

  ngOnInit(): void {
  }

  closeBuyCoursesModal() {
    this.appService.classTimeModal = false
  }

}
