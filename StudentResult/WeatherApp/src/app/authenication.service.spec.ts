import { TestBed } from '@angular/core/testing';

import { AuthenicationService } from './authenication.service';

describe('AuthenicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenicationService = TestBed.get(AuthenicationService);
    expect(service).toBeTruthy();
  });
});
