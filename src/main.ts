import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
 
import { MovieConfigComponent } from './app/movieconfig/movieconfig.component';
import { FIREBASE_PROVIDERS, defaultFirebase,FirebaseListObservable } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(MovieConfigComponent,[HTTP_PROVIDERS,FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyBBJsNcr2LjhMofFsqTIHnY8eRRG1pq6xc",
    authDomain: "moviereview-9255a.firebaseapp.com",
    databaseURL: "https://moviereview-9255a.firebaseio.com/",
    storageBucket: ""
  })]);
