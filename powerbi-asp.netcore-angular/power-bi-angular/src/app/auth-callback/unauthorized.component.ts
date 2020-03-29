import { Component, OnInit } from '@angular/core';
import { AuthService } from '../oauth/auth.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: 'unauthorized.component.html'
})

export class UnauthorizedComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() { }

  logout() {
    this.authService.signout();
  }
}
