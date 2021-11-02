import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor(
    public appService: AppService  
  ) {
  }

  ngOnInit(): void {
  }

  openBuyCoursesModal() {
    this.appService.buyCourseModal = true
  }

  openClassTimingModal(){
    this.appService.classTimeModal = true
  }

}
