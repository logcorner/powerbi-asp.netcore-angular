import { Component, OnInit, OnDestroy } from '@angular/core';
import { Report } from './model/report';
import { PowerbiService } from './services/powerbi.service';
import { AuthService } from './oauth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  name: string;
  isAuthenticated: boolean;
  subscription: Subscription;
  title: any;

  constructor(private powerbiService: PowerbiService, private authService: AuthService) {
  }
  
  ngOnInit(): void {
   
    this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
    this.name = this.authService.name;
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
  async signout() {
    await this.authService.signout();
  }
}
