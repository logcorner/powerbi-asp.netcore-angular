import { Component, OnInit } from '@angular/core';
import { AuthService } from '../oauth/auth.service';
import { Profile } from 'oidc-client';
import * as jwt_decode from 'jwt-decode';
import { Userinfos } from '../oauth/user.infos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  claim: Userinfos;
  constructor(private authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.claim =  this.authService.getUserInfo();
    console.log('this.claims' + JSON.stringify(this.claim));
  }
}
