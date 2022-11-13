import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CWEService } from 'src/app/cwe.service';

@Component({
  selector: 'app-cwe89',
  templateUrl: './cwe89.component.html',
  styleUrls: ['./cwe89.component.scss']
})
export class Cwe89Component implements OnInit {

  constructor(private service: CWEService) { }
  readonly ROOT_URL = 'http://localhost:8000/api/cwe89';
  login: string = "";
  password: string = "";
  user: User;
  ngOnInit(): void {
  }

  signIn(): void{
    this.service.signIn(this.login, this.password) 
    .subscribe((user: User) => {
      console.log(user);
      this.user = user;
    });
  }

}

export interface User{
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;

}