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
  sessionID: number;
  sessionID2: string;
  ngOnInit(): void {
    this.getSessionID();
    this.getSessionID_2();
  }


  getSessionID(){
//Because the seed for the PRNG is always the user's ID, the session ID will always be the same. An attacker could thus predict any user's session ID and potentially hijack the session.
    let params = new HttpParams();
    params = params.append('userID', 32);
    const requestOptions = { params: params };
    this.http.get<number>(this.ROOT_URL + '/cwe331',requestOptions)
    .subscribe((sessionID: number) => {
      console.log(sessionID);
      this.sessionID = sessionID;
  });
  }

  getSessionID_2(){
    //Because the seed for the PRNG is always the user's ID, the session ID will always be the same. An attacker could thus predict any user's session ID and potentially hijack the session.
        this.http.get<string>(this.ROOT_URL + '/cwe331_2')
        .subscribe((sessionID: string) => {
          console.log(sessionID);
          this.sessionID2 = sessionID;
      });


}

}
