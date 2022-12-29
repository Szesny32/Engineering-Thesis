import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { UserA1 } from '../action-panel/page-a1/page-a1.component';

@Injectable({
  providedIn: 'root'
})
export class A1Service {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';

  

  vuln_changePsswd(id: number, passwd: string, passwd_confirm:string){
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('passwd', passwd);
    params = params.append('passwd_confirm', passwd_confirm);
 
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    const requestOptions = { headers: headers, params: params };
    return this.http.post<any>(this.ROOT_URL + '/A1-changePasswd_vuln', requestOptions);
  }

  secure_changePsswd(sessid: string, passwd: string, passwd_confirm: string){
    let params = new HttpParams();
    params = params.append('sessid', sessid);
    params = params.append('passwd', passwd);
    params = params.append('passwd_confirm', passwd_confirm);
    const requestOptions = { params: params };
    return this.http.post<any>(this.ROOT_URL + '/A1-changePasswd_secure', requestOptions);
  }

  getUser(){

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    const requestOptions = { headers: headers, };
    return this.http.post<UserA1>(this.ROOT_URL + '/A1-getUser', requestOptions);

  }



}


