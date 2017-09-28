import { Directive, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[fraFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite: boolean = false;
  @HostBinding('class.is-hovering') isHovering: boolean = false;

  @Input() set fraFavorite(value) {
    this.isFavorite = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }

}
