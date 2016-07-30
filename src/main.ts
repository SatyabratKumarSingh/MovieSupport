import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
 
import { MovieConfigComponent } from './app/movieconfig/movieconfig.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(MovieConfigComponent,[HTTP_PROVIDERS]);
