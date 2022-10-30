import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { CWE } from '../data-models/cwe';
@Component({
  selector: 'app-cwe-list',
  templateUrl: './cwe-list.component.html',
  styleUrls: ['./cwe-list.component.scss']
})
export class CweListComponent implements OnInit {


  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';
  CWEs: Observable<CWE[]>;

  ngOnInit(): void {
    this.getCWEs();
  }

  getCWEs(){
    this.CWEs = this.http.get<CWE[]>(this.ROOT_URL + '/cwe-list');
  }
}

