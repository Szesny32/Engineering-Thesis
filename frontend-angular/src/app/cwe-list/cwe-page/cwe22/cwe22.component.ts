import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
@Component({
  selector: 'app-cwe22',
  templateUrl: './cwe22.component.html',
  styleUrls: ['./cwe22.component.scss']
})
export class Cwe22Component implements OnInit {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api/cwe22/?filename=';
  filename: string = "user-manual";
  selectedLevel: number = 0;

  ngOnInit(): void {
  }

  downloadFile(filename: string): void {
    window.open(this.ROOT_URL + filename);
  }

  setDialog(id: number): void{
    this.selectedLevel = id;
  }
  counter(i: number) {
    return new Array(i);
}

}

export interface Dialogs{
  dialogs: Dialog[]
}

export interface Dialog{
  dialog: string;
  type: number;
}