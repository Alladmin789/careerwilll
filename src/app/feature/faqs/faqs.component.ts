import {  Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  collapsed = false;
  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
  }
  expand(event:any) : void {
    event.stopPropagation();
    let elements = this.elem.nativeElement.querySelectorAll('.test');
    elements.forEach((item: any) => {
      item.classList.remove('test')
    });
    console.log(event.target);
    event.target.classList.add("test")
  }
}
