import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { CWEService } from 'src/app/cwe.service';
@Component({
  selector: 'app-cwe331',
  templateUrl: './cwe331.component.html',
  styleUrls: ['./cwe331.component.scss']
})
export class Cwe331Component implements OnInit {

  constructor(private service: CWEService) { }

  readonly ROOT_URL = 'http://localhost:8000/api';
  sessionID: number;
  sessionID2: string;
  userID: number = 32;
  ngOnInit(): void {}

  getSessionID() {
    this.service.getSessionID(this.userID)
      .subscribe((sessionID: number) => {
        this.sessionID = sessionID;
      });
  }

  getSessionID_2() {
    this.service.getSessionID_2()
      .subscribe((sessionID: string) => {
        this.sessionID2 = sessionID;
      });
  }
}