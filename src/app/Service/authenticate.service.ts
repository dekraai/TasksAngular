import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../DTO/login-user';
import { Token } from '../DTO/token';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  authenticationState = new BehaviorSubject(false);
  loggedInUser = new BehaviorSubject(null);

  constructor() { }
  http = inject(HttpClient);

  login(user: LoginUser): Observable<Token> {
    return this.http.post<Token>(environment.server + 'auth/login', user);
  }
}
