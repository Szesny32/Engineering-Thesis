import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Key } from '../action-panel/page-a8/page-a8.component';

@Injectable({
  providedIn: 'root'
})
export class A8Service {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';

  getKeys(){
    
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    
    return this.http.post<Key[]>(this.ROOT_URL + '/A8-getKeys', requestOptions);
  }



}
