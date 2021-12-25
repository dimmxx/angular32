import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appShowComponent]'
})
export class ShowComponentDirective {

  @Input()
  appShowComponent!: boolean;

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.appShowComponent = true;
  }

  @HostListener('mouseleave') onMouseLeave() {

  }



}
