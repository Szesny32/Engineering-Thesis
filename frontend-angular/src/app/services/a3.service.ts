import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { UserA3 } from '../action-panel/page-a3/page-a3.component';

@Injectable({
  providedIn: 'root'
})
export class A3Service {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';



  
  signIn_injection(login: string, password: string) {
    const body = {login, password};
    console.log(body);
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<any>(this.ROOT_URL + '/A3-sql_injection', body,  requestOptions);
  }


  signIn_injectionFree(login: string, password: string) {
    const body = {login, password};
    console.log(body);
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<any>(this.ROOT_URL + '/A3-sql_injection_free', body,  requestOptions);
  }

  
}
