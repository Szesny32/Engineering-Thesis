import { Injectable } from '@angular/core';
import { CWE } from './data-models/cwe';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './cwe-list/cwe-page/cwe89/cwe89.component';

@Injectable({
  providedIn: 'root'
})
export class CWEService {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';
  selectedCWE: number = 0;
  getList(): Observable<CWE[]> {

    return this.http.get<CWE[]>(this.ROOT_URL + '/cwe-list');
  }
  getSelectedCWE(): Observable<number> {
    const x = of(this.selectedCWE);
    return x;
  }
  setCWE(id: number): void {
    this.selectedCWE = id;
  }

  signIn_p(login: string, password: string) {
    let params = new HttpParams();
    params = params.append('login', login);
    params = params.append('password', password);

    const requestOptions = { params: params };
    return this.http.get<User>(this.ROOT_URL + '/cwe89_problem', requestOptions);
  }
  signIn_s(login: string, password: string) {
    let params = new HttpParams();
    params = params.append('login', login);
    params = params.append('password', password);

    const requestOptions = { params: params };
    return this.http.get<User>(this.ROOT_URL + '/cwe89_solution', requestOptions);
  }


  getSessionID(userID: number) {
    //Because the seed for the PRNG is always the user's ID, the session ID will always be the same. An attacker could thus predict any user's session ID and potentially hijack the session.
    let params = new HttpParams();
    params = params.append('userID', userID);
    const requestOptions = { params: params };
    return this.http.get<number>(this.ROOT_URL + '/cwe331', requestOptions);
  }

  getSessionID_2() {
    return this.http.get<string>(this.ROOT_URL + '/cwe331_2');
  }


  CWE209(){
    return this.http.get<string>(this.ROOT_URL+'/cwe_209');
  }


}

