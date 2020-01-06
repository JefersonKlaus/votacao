import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


import {AuthService} from '../guard/auth.service';
import {VotingService} from '../services/voting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  previousResult: Array<{ name: string, number: number }>;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private votingService: VotingService
  ) {
    this.loginForm = this.formBuilder.group({
      employeeCode: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.previousResult = this.votingService.getResult();
    this.previousResult = this.previousResult
      .sort((a, b) => (a.number > b.number) ? -1 : (a.number === b.number) ? ((a.number > b.number) ? -1 : 1) : 1);
  }

  onSubmitLoginForm() {
    this.authService.login(this.loginForm.getRawValue().employeeCode);
    this.router.navigate(['/voting']);
  }

}
