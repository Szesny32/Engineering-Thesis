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



}

