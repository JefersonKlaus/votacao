import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';


import {AuthService} from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([])],
  }));

  it('Deve criar o service', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

});
