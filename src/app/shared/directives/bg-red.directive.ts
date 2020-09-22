import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgRed]'
})
export class BgRedDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
    element.nativeElement.style.color = 'white';
  }

}
