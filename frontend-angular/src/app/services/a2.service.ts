import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { UserA2 } from '../action-panel/page-a2/page-a2.component';

@Injectable({
  providedIn: 'root'
})
export class A2Service {

  
  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';

  getUsers(encryption_type: number){
  

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers };

    const body = {encryption_type};

    return this.http.post<UserA2[]>(this.ROOT_URL + '/A2-getUsers',body, requestOptions);
  }

  logIn(login: string, passwd: string, encryption_type: number){
    
    const body = {login, passwd, encryption_type};
    console.log(body);
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<any>(this.ROOT_URL + '/A2-logIn', body,  requestOptions);
  }


}
