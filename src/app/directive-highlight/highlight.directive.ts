import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fraHightLight]'
})

export class HighLightDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    this.hightlight("orange");
  }

  private hightlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    this.renderer.setElementStyle(this.el.nativeElement, 'color','red');
    this.renderer.setElementStyle(this.el.nativeElement, 'cursor','pointer');
  }
}
