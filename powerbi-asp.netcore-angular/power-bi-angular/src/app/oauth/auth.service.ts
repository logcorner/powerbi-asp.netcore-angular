import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserManager, User, Profile } from 'oidc-client';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';
import { getClientSettings } from './client.settings';
import * as jwt_decode from 'jwt-decode';
import { Userinfos } from './user.infos';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService  {

  // Observable navItem source
  private authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this.authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;

  constructor(private http: HttpClient, private configService: ConfigService) { 
    super();
    this.manager.getUser().then(user => {
      this.user = user;
      this.authNavStatusSource.next(this.isAuthenticated());
    });
  }

  login() {
    return this.manager.signinRedirect();
  }

  async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this.authNavStatusSource.next(this.isAuthenticated());
  }

  completeLogout() {
    this.user = null;
    this.authNavStatusSource.next(false);
    return this.manager.signoutRedirectCallback();
  }
  register(userRegistration: any) {
    return this.http.post(this.configService.authApiURI + '/account', userRegistration).pipe(catchError(this.handleError));
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    console.log('user =' + JSON.stringify(this.user));
    return this.user != null ? `${this.user.profile.given_name} ${this.user.profile.family_name} ` : '';
  }

  async signout() {
    await this.manager.signoutRedirect();
  }
  getUserInfo(): Userinfos {
    // tslint:disable-next-line:prefer-const
    let decodedToken = jwt_decode(this.user.access_token);
    const   result: Userinfos = {
      iss: decodedToken.iss,
      client_id: decodedToken.client_id,
      accessLevel: decodedToken.accessLevel,
      permissions : decodedToken.Permissions,
      given_name: decodedToken.given_name,
      family_name: decodedToken.family_name,
      email: decodedToken.email,
      businessUnit : decodedToken.businessUnit,
     scope: decodedToken.scope

    };

    return result;
  }
}


