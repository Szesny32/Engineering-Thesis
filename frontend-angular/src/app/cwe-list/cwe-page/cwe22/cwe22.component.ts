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

  images: string[] = [
    "/assets/images/1.png",
    "/assets/images/2.png",
  ];
  alttext: string[] = [
    "Missing 1.png",
    "Missing 2.png",
  ];

  ngOnInit(): void {
  }

  downloadFile(filename: string): void {
    window.open(this.ROOT_URL + filename);
  }

}
