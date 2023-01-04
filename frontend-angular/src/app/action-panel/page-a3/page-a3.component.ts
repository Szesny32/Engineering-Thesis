import { Component, OnInit } from '@angular/core';
import { A3Service } from 'src/app/services/a3.service';

@Component({
  selector: 'app-page-a3',
  templateUrl: './page-a3.component.html',
  styleUrls: ['./page-a3.component.scss']
})
export class PageA3Component implements OnInit {

  constructor (private service: A3Service){}
  login: string = "";
  password: string = "";
  user: UserA3;


  ngOnInit(): void {
  }

  selectedLevel: number = 0;
  setDialog(id: number): void{
    this.selectedLevel = id;
  }
  signIn_injectionFree(): void{
      this.service.signIn_injectionFree(this.login, this.password) 
      .subscribe((user: UserA3) => {
        console.log(user);
        this.user = user;
      });
  }
  signIn_injection(): void{
    this.service.signIn_injection(this.login, this.password) 
    .subscribe((user: UserA3) => {
      console.log(user);
      this.user = user;
    });
  }
}
export interface UserA3{
  id: number;
  login: string;
  email: string;
  salt: string;
  passwd: string;
}