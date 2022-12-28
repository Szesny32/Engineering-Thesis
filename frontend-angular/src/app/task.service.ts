import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vulnerability } from './data-models/vulnerability';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';
  
  getList(): Observable<Vulnerability[]> {

    return this.http.get<Vulnerability[]>(this.ROOT_URL + '/vulnerabilities');
  }
}
