import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../oauth/auth.service';

@Component({
  selector: 'app-signout-callback',
  template: `<div></div>`
})

export class SignoutRedirectCallbackComponent implements OnInit {
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.completeLogout().then(_ => {
      this.router.navigate(['/'], { replaceUrl: true });
    });
  }
}
