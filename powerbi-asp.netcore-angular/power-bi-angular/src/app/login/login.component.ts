import { Component, OnInit } from '@angular/core';
import { AuthService } from '../oauth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
    title = 'Login';
    login() {
       this.authService.login();
    }
    ngOnInit() {
    }
}


