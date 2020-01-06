import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VotingComponent} from './voting.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatCardModule, MatSnackBarModule} from '@angular/material';
import {DatePipe} from '@angular/common';


describe('VotingComponent', () => {
  let component: VotingComponent;
  let fixture: ComponentFixture<VotingComponent>;

  // let votingService: VotingService;
  // let authService: AuthService;
  // let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MatCardModule,
        MatSnackBarModule,
      ],
      // imports: [RouterModule],
      providers: [DatePipe],
      declarations: [VotingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o voting', () => {
    expect(component).toBeTruthy();
  });
});
