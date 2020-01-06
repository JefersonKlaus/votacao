import {TestBed} from '@angular/core/testing';

import {VotingService} from './voting.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DatePipe} from '@angular/common';
import {AuthService} from '../guard/auth.service';

describe('VotingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([])
    ],
    providers: [AuthService, VotingService, DatePipe]
  }));

  it('Deve criar o servico', () => {
    const service: VotingService = TestBed.get(VotingService);
    expect(service).toBeTruthy();
  });

  it('Deve autorizar usuario a votar', () => {
    const authService: AuthService = TestBed.get(AuthService);
    const votingService: VotingService = TestBed.get(VotingService);

    authService.login('123');
    expect(votingService.validateIfUserCanVote()).toBeTruthy();
  });

  it('Deve impedir usuario de votar', () => {
    const authService: AuthService = TestBed.get(AuthService);
    const votingService: VotingService = TestBed.get(VotingService);

    authService.login('123');
    votingService.putVote('abc');
    expect(votingService.validateIfUserCanVote()).toBeFalsy();
  });
});
