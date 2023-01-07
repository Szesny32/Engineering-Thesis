import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Files } from '../action-panel/page-a10/page-a10.component';

@Injectable({
  providedIn: 'root'
})
export class A10Service {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';

  downloadFile(id: number){
    const body = {id};
    return this.http.post(this.ROOT_URL + '/A10-downloadFile',body, {responseType: 'blob'});
  }



  getStorage(user_id: number){
    const body = {user_id};
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<Files[]>(this.ROOT_URL + '/A10-getStorage', body,  requestOptions);
  }


  upload(user_id: number, filename: string, url: string){
    const body = {filename, url, user_id};
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<string>(this.ROOT_URL + '/A10-getStorage', body,  requestOptions);
  }


}
