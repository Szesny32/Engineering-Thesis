import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from './user';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';
  users: Observable<User[]>;

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    this.users = this.http.get<User[]>(this.ROOT_URL + '/users');
  }
}
