import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TextComponent } from './text/text.component';
import { NumberComponent } from './number/number.component';
import { DateComponent } from './date/date.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    
    TextComponent,
    NumberComponent,
    DateComponent,
    PasswordComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
