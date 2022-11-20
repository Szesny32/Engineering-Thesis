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

  ngOnInit(): void {
   
  }

  setCookie() {
    return this.http.get(this.ROOT_URL + '/cwe614');
  }



  username:string = 'Template <script>alert("0wned")</script> <b>Syntax</b>'
getMe(){
  return this.http.get(this.ROOT_URL + '/test');

}

//CWE-79 Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')
//CWE-352: Cross-Site Request Forgery (CSRF)
//


}


