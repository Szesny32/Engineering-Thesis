import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuditLog, ExceptionLog } from '../action-panel/page-a9/page-a9.component';
@Injectable({
  providedIn: 'root'
})
export class A9Service {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';


  
  getExceptionLogs(){
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<ExceptionLog[]>(this.ROOT_URL + '/A9-getExceptionLogs',  requestOptions);
  }

  getAuditionLogs(){
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<AuditLog[]>(this.ROOT_URL + '/A9-getAuditionLogs',  requestOptions);
  }


}
