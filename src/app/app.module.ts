import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRoosterjsModule } from 'ngx-roosterjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRoosterjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
