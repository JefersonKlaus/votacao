import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {DatePipe, Location} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';


import {routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './guard/auth.service';
import {VotingService} from './services/voting.service';
import {VotingComponent} from './voting/voting.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {

  let votingService: VotingService;
  let authService: AuthService;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        VotingComponent,
        HomeComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule,
      ],
      providers: [
        AuthGuard,
        AuthService,
        VotingService,
        DatePipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    authService = TestBed.get(AuthService);
    location = TestBed.get(Location);
    votingService = TestBed.get(VotingService);
  });


  it('Deve criar o app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Deve redirecionar para /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

});
