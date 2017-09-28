import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[fraHightLight]',
  host: {
    '(click)' : 'onClick($event)'
  }
})

export class HighLightDirective {

  @Input("fraHightLight") hightLightColor: string;
  private _defaultColor: string = "yellow";

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hightlight(this.hightLightColor || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightlight(null);
  }

  onClick($event) {
    console.log($event.target.innerText);
  }

  private hightlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    this.renderer.setElementStyle(this.el.nativeElement, 'cursor','pointer');
  }
}
