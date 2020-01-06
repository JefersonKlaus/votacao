import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  employeeCodeLogged: string = null;

  constructor(private router: Router) {
  }

  login(code: string): boolean {
    if (code === null) {
      return  false;
    }

    this.employeeCodeLogged = code;
    return true;
  }

  logout() {
    this.employeeCodeLogged = null;
    this.router.navigate(['/home']);
  }
}
