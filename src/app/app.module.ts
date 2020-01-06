import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
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


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {VotingComponent} from './voting/voting.component';
import {HomeComponent} from './home/home.component';
import {VotingService} from './services/voting.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './guard/auth.service';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,


    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    VotingService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
