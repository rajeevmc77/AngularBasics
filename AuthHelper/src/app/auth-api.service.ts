import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { AuthUser } from './auth-user';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  apiURL = '/api/';

  constructor(private httpClient: HttpClient) { }
  public getContacts() {
    return this.httpClient.get<AuthUser[]>(`${this.apiURL}/login`);
  }
  public createUser(usr: AuthUser){
    return this.httpClient.post(`${this.apiURL}/createUser/`, usr);
  }
  public verifyUser(usr: AuthUser) {
    return this.httpClient.post(`${this.apiURL}/verify/`, usr);
  }
}
