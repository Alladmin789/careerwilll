import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  collapsed = false;
  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }

  expand() {
    console.log(this.myElement.nativeElement);
  }
}
