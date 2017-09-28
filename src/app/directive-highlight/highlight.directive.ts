import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[fraHightLight]',
  host: {
    '(click)' : 'onClick($event)'
  }
})

export class HighLightDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(null);
  }

  onClick($event) {
    console.log($event.target.innerText);
  }

  private hightlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    this.renderer.setElementStyle(this.el.nativeElement, 'color','red');
    this.renderer.setElementStyle(this.el.nativeElement, 'cursor','pointer');
  }
}
