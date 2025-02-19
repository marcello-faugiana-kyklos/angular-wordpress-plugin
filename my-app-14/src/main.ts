
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { MyPluginComponent } from './app/my-plugin/my-plugin.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*

 import { MyPluginComponent } from './app/my-plugin/my-plugin.component';
 import { bootstrapApplication } from "@angular/platform-browser";
 import { NgZone } from '@angular/core';
NgZone.assertInAngularZone();
 bootstrapApplication(MyPluginComponent);
 */