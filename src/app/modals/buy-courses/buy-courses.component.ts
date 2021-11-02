import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-buy-courses',
  templateUrl: './buy-courses.component.html',
  styleUrls: ['./buy-courses.component.scss']
})
export class BuyCoursesComponent implements OnInit {

  constructor(
    public appService: AppService

  ) { }

  ngOnInit(): void {
  }

  closeBuyCoursesModal() {
    this.appService.buyCourseModal = false
  }


}
