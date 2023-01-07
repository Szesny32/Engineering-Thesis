import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signature, SignConfirmation } from '../action-panel/page-a8/page-a8.component';
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

  sign(key_id: number, resource: string){
    const body = {key_id, resource};
    console.log(body);
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<Signature>(this.ROOT_URL + '/A8-sign', body,  requestOptions);
  }

  
  checkSignature(resource: string, signature: string, public_key: string){
    const body = {resource, signature, public_key};
    console.log(body);
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<SignConfirmation>(this.ROOT_URL + '/A8-checkSignature', body,  requestOptions);
  }



}
