import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthService } from './oauth/auth.service';
import { AuthGuard } from './oauth/auth.guard';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './oauth/config.service';
import { ReportComponent } from './report/report.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SignoutRedirectCallbackComponent } from './auth-callback/signout-redirect-callback.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UnauthorizedComponent } from './auth-callback/unauthorized.component';
import { AuthInterceptor } from './oauth/auth-interceptor';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    AuthCallbackComponent,
    SignoutRedirectCallbackComponent,
    LoginComponent,
    ReportComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    UnauthorizedComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard, AuthService, ConfigService, SessionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
