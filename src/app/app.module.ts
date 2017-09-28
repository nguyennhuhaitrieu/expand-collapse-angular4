import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighLightComponent } from './directive-highlight/highlight.component';
import { HighLightDirective } from './directive-highlight/highlight.directive';
import { FavoriteComponent }  from './directive-favorite/favorite.component';
import { FavoriteDirective }  from './directive-favorite/favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLightComponent,
    HighLightDirective,
    FavoriteComponent,
    FavoriteDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
