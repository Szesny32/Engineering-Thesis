import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { A10Response, File, UserFile } from '../action-panel/page-a10/page-a10.component';

@Injectable({
  providedIn: 'root'
})
export class A10Service {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';

  downloadFile(id: number){
    const body = {id};
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<File>(this.ROOT_URL + '/A10-downloadFile',body, requestOptions);
  }



  getStorage(user_id: number){
    const body = {user_id};
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<UserFile[]>(this.ROOT_URL + '/A10-getStorage', body,  requestOptions);
  }


  upload(user_id: number, filename: string, url: string){
    const body = {filename, url, user_id};
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<A10Response>(this.ROOT_URL + '/A10-upload', body,  requestOptions);
  }
  uploadSecured(user_id: number, filename: string, url: string){
    const body = {filename, url, user_id};
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const requestOptions = { headers: headers};
    return this.http.post<A10Response>(this.ROOT_URL + '/A10-upload_secure', body,  requestOptions);
  }

}
