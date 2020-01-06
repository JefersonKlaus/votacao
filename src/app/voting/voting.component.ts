import {Component, OnInit} from '@angular/core';
import {VotingOption} from '../shared/voting-option-model';
import {VotingService} from '../services/voting.service';
import {AuthService} from '../guard/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  hideButton: boolean;
  userCanVote = true;
  optionSelected: string = null;
  options: Array<VotingOption> = [];

  constructor(
    private snackBar: MatSnackBar,
    private votingService: VotingService,
    public authService: AuthService,
  ) {
    if (this.votingService.validateIfUserCanVote()) {
      this.options = this.votingService.getOptionsToVote();
    } else {
      this.userCanVote = false;
    }
  }

  ngOnInit() {
  }

  /**
   * Salva o voto e mostra aviso em tela
   */
  saveVote() {
    this.hideButton = true;

    this.votingService.putVote(this.optionSelected);

    this.snackBar.open('Voto efetuado com sucesso!', 'OK')
      .afterDismissed().subscribe(() => {
      this.authService.logout();
    });
  }

}
