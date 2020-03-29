import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class SessionService {

  constructor( private cookieService: CookieService ) {
   }

  setCookie(name: string, value: string) {
    this.cookieService.set( name, value );
  }

  getCookie(name: string) {
    return this.cookieService.get(name);
  }
}
