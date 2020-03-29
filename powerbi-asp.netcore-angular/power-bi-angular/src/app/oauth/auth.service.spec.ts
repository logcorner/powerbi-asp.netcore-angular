import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ConfigService],
    imports: [
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
