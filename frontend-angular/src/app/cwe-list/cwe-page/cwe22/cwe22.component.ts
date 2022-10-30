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
  readonly ROOT_URL = 'http://localhost:8000/api';
  text: string;
  ngOnInit(): void {
  }
    getFile(): void{
      this.http.get(this.ROOT_URL + '/cwe22/?filename=../secret.txt', { responseType: 'text' as 'json'}).subscribe(data => {
        this.text = data.toString();   
    })
  }
    downloadFile(filename: string): void{
      window.open(this.ROOT_URL+'/cwe22/?filename='+filename);
    }
  
}
