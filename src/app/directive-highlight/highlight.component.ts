import { Component } from '@angular/core';

@Component({
  selector: 'app-hightlight',
  templateUrl: './highlight.component.html',
})
export class HighLightComponent {

  color: string = "#000804";

  constructor() {
  }

  changeColor(value: string) {
    this.color = value;
  }
}
