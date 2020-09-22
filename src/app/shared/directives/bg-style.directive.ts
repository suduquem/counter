import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgStyle]'
})
export class BgStyleDirective {

  constructor(element: ElementRef) {
    // element.nativeElement: trae el elemnto al que se le agregó el decorador/atributo
    element.nativeElement.style.color = 'green';
  }

}
