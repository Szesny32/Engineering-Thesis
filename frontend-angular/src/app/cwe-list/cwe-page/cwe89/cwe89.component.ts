import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CWEService } from 'src/app/cwe.service';

@Component({
  selector: 'app-cwe89',
  templateUrl: './cwe89.component.html',
  styleUrls: ['./cwe89.component.scss']
})
export class Cwe89Component implements OnInit {

  constructor(private service: CWEService) { }

  login: string = "";
  password: string = "";
  user: User;


  ngOnInit(): void {
  }
  selectedLevel: number = 0;
  setDialog(id: number): void{
    this.selectedLevel = id;
  }
  signIn(secure:Boolean): void{
    if(secure){
      this.service.signIn_s(this.login, this.password) 
      .subscribe((user: User) => {
        console.log(user);
        this.user = user;
        if(this.password == "'OR 1=1;-- "){
          this.selectedLevel = 4;
        }
      });
    }
    else{
      this.service.signIn_p(this.login, this.password) 
      .subscribe((user: User) => {
        console.log(user);
        this.user = user;
      });
      if(this.password == "'OR 1=1;-- "){
        this.selectedLevel = 2;
      }

    }



  
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