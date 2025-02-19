
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
 import { MyPluginComponent } from './my-plugin/my-plugin.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPluginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyPluginComponent]
})
export class AppModule { }
