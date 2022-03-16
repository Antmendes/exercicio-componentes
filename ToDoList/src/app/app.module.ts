import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtnComponent } from './btn/btn.component';
import { BtnClearAllDirective } from './btn-clear-all.directive';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    BtnClearAllDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
