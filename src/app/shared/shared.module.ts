import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ShowComponentDirective } from './show-component.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    ShowComponentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ShowComponentDirective
  ]
})
export class SharedModule { }
