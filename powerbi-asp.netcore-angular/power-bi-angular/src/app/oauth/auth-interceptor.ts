import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.authorizationHeaderValue;
    // Clone the request and replace the original headers with
    const headers = req.headers
    .set('Content-Type', 'application/json')
    .set('Authorization', authToken);
     // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers
    });

    return next.handle(authReq).pipe(
    catchError(error => {
      // Checking if it is an Authentication Error (401)
      if (error.status === 401 || error.status === 403) {
        console.log('Access Denied');
        this.router.navigate([ 'unauthorized' ]);
        return throwError(error);
      }
      // If it is not an authentication error, just throw it
      return throwError(error);
    })
  );
  }
}
