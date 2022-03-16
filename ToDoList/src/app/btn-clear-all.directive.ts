import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBtnClearAll]'
})
export class BtnClearAllDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = '#7159c1'
    this.el.nativeElement.style.fontSize = '18px'
    this.el.nativeElement.style.height = '50px'
    this.el.nativeElement.style.width = '85px'
    this.el.nativeElement.style.color = 'white'
   }

}
