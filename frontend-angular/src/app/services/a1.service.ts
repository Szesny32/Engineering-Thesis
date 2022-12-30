import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { UserA1, UserA1_b } from '../action-panel/page-a1/page-a1.component';

@Injectable({
  providedIn: 'root'
})
export class A1Service {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';

  

  vuln_changePsswd(id: number, passwd: string, passwd_confirm:string){

    const body = {id, passwd, passwd_confirm};
    
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    
    return this.http.post<any>(this.ROOT_URL + '/A1-changePasswd_vuln',body, requestOptions);
  }

  secure_changePsswd(id: number,sessid: string, passwd: string, passwd_confirm: string){
    
    const body = {id, sessid, passwd, passwd_confirm};
    console.log(body);
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<any>(this.ROOT_URL + '/A1-changePasswd', body,  requestOptions);
  }

  getUser(id: number){

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const body = {id};
    const requestOptions = { headers: headers };
    return this.http.post<UserA1>(this.ROOT_URL + '/A1-getUser',body, requestOptions);

  }

  getUsers(){
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    const requestOptions = { headers: headers };
    return this.http.post<UserA1_b[]>(this.ROOT_URL + '/A1-getUsers', requestOptions);
  }

  refreshSession(id: number){

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const body = {id};
    const requestOptions = { headers: headers };
    return this.http.post<UserA1>(this.ROOT_URL + '/A1-resfreshSession',body, requestOptions)
  }

  expireSession(id: number){

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const body = {id};
    const requestOptions = { headers: headers };
    return this.http.post<UserA1>(this.ROOT_URL + '/A1-expireSession',body, requestOptions)
  }





}


