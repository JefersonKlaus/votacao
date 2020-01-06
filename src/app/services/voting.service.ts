import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';


import {AuthService} from '../guard/auth.service';
import {VotingOption} from '../shared/voting-option-model';
import {Vote} from '../shared/vote-model';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  voteList: Array<Vote> = [];

  constructor(
    private authService: AuthService,
    private datePipe: DatePipe) {
  }

  /**
   * Busca todos os restaurantes candidatos
   */
  getOptionsToVote(): Array<VotingOption> {
    return [
      {
        id: '123',
        name: 'Bear Garden',
        city: 'campo bom'
      }, {
        id: '234',
        name: 'Pica-pau',
        city: 'Novo Hamburgo'
      }, {
        id: '345',
        name: 'Trentin',
        city: 'campo bom'
      }, {
        id: '456',
        name: 'Canttoni',
        city: 'Novo Hamburgo'
      }, {
        id: '567',
        name: 'Vone',
        city: 'campo bom'
      }, {
        id: '678',
        name: 'Klaus House',
        city: 'campo bom'
      }, {
        id: '789',
        name: 'Portal da Serra',
        city: 'campo bom'
      },
    ];
  }

  /**
   * Insere o voto na lista
   * @param id restaurante escolhido pelo usuario
   */
  putVote(id: string) {
    this.voteList.push({
      id,
      employeeCode: this.authService.employeeCodeLogged,
      date: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    });
  }

  /**
   * Verifica se o usuario logado pode votar hoje
   */
  validateIfUserCanVote(): boolean {
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.voteList.filter(item => item.date === today && item.employeeCode === this.authService.employeeCodeLogged).length === 0;
  }

  /**
   * Faz uma varredura de item por item (restaurantes) e retorna uma lista com nome e quantidade de votos
   */
  getResult(): Array<{ name: string, number: number }> {
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    const todayVoteList = this.voteList.filter(item => item.date === today);
    const result: Array<{ name: string, number: number }> = [];

    for (const optionToVote of this.getOptionsToVote()) {
      result.push({
        name: optionToVote.name,
        number: todayVoteList.filter(item => item.id === optionToVote.id).length
      });
    }

    return result;
  }

}
