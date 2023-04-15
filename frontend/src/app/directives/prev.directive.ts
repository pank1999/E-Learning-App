import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  prevFunc() {
    var elem = this.el.nativeElement.parentElement.parentElement.children[0];
    const item = elem.getElementsByClassName('slider-item');
    console.log(item);
    elem.prepend(item[item.length - 1]);
  }
}
