import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appShowComponent]'
})
export class ShowComponentDirective {

  @Input()
  appShowComponent!: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {

    this.el.nativeElement.querySelector("app-cart-item").style.display = '';

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.querySelector("app-cart-item").style.display = 'none';
  }



}
