﻿import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AppComponent } from './app.component';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//import 'rxjs/Rx';
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);