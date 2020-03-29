import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './protected/protected.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { SignoutRedirectCallbackComponent } from './auth-callback/signout-redirect-callback.component';
import { AuthGuard } from './oauth/auth.guard';
import { UnauthorizedComponent } from './auth-callback/unauthorized.component';


const routes: Routes = [
  { path: '', redirectTo: '**', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reports', component: ReportComponent,  canActivate: [AuthGuard]},
  { path: 'orders', component: ProtectedComponent,  canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent },
  { path: 'auth-callback', component: AuthCallbackComponent  },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
