import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data-models/user';
import { A1Service } from 'src/app/services/a1.service';

@Component({
  selector: 'app-page-a1',
  templateUrl: './page-a1.component.html',
  styleUrls: ['./page-a1.component.scss']
})
export class PageA1Component implements OnInit {


  ID: number = 1;
  sessid: string = "65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5";
  user: UserA1 = {login: "", sessid: "", email: ""};
  response: String;

  passwd1: string;
  passwd2: string;

  
  constructor(private service: A1Service) { }

  ngOnInit(): void {
  
    this.service.getUser().subscribe(user=>{this.user  = user;
      console.log(user)});
  }
  
  selectedLevel: number = 0;

  setDialog(id: number): void {
    this.selectedLevel = id;
  }

  

  submit(secure: boolean, passwd: string, passwd_confirm: string): void {

    if(passwd!=passwd_confirm){
      this.response = "Passwords don't match";
      return;
    }
    
    if(secure){
      this.service.secure_changePsswd(this.sessid, passwd, passwd_confirm) 
      .subscribe(response => {
        this.response = response['message'];
      })
    } else {
      this.service.vuln_changePsswd(this.ID, passwd, passwd_confirm)
      .subscribe(response => {
        this.response = response['message'];
      });
    }
  }
}

export interface UserA1{
  login: string;
  email: string;
  sessid: string;
}