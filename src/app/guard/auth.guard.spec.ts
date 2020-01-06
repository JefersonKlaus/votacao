import {inject, TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [AuthGuard]
    });
  });

  it('Deve criar o Servico', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('Deve validar codigo, retornando true', inject([AuthService], (service: AuthService) => {
    expect(service.login('codigo')).toBeTruthy();
  }));

  it('Deve invalidar codigo, retornando false', inject([AuthService], (service: AuthService) => {
    expect(service.login(null)).toBeFalsy();
  }));

});
