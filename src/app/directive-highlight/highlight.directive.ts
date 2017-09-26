import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fraHightLight]'
})

export class HighLightDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor','yellow');
  }
}
