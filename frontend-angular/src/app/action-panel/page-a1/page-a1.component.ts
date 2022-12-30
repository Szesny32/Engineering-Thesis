import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data-models/user';
import { A1Service } from 'src/app/services/a1.service';

@Component({
  selector: 'app-page-a1',
  templateUrl: './page-a1.component.html',
  styleUrls: ['./page-a1.component.scss']
})
export class PageA1Component implements OnInit {


  //ID: number = 1;
  //sessid: string = "65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5";
  user: UserA1 = {id: 1, login: "", email: "",  sessid: "", expire_at: ""};
  users:UserA1_b[];
  response: String = "";
  passwd1: string;
  passwd2: string;


  id: number = 1;
  sessid: string ="";

  
  constructor(private service: A1Service) { }

  ngOnInit(): void {
  
    this.getUser(1);
    this.updateUsersData();
 
  }
  
getUser(id: number){
  this.service.getUser(id).subscribe(user=>this.user  = user);
}

  updateUsersData():void{
  this.service.getUsers().subscribe(users => this.users = users);

  }


  selectedLevel: number = 0;

  setDialog(id: number): void {
    this.selectedLevel = id;
    this.response = "";
  }

  refreshSession(){
    this.service.refreshSession(this.user.id).subscribe(user=>this.user  = user);
  }
  expireSession(){
    this.service.expireSession(this.user.id).subscribe(user=>this.user  = user);
  }



  submit(secure: boolean, passwd: string, passwd_confirm: string): void {

    if(passwd!=passwd_confirm){
      this.response = "Passwords don't match";
      return;
    }
    
    if(secure){
      this.service.secure_changePsswd(this.user.id, this.user.sessid, passwd, passwd_confirm) 
      .subscribe(response => {
        this.response = response['message'];
    })
    } else {

      this.service.vuln_changePsswd(this.user.id, passwd, passwd_confirm)
      .subscribe(response  => {
        console.log(response);
       this.response = response['message'];
      });
    }
    this.updateUsersData();
  }



  getExpireAt() {
    const expireAt = new Date(this.user.expire_at);
    const currentDate = new Date();
    if (expireAt < currentDate) 
      return true;
     else 
      return false;
  }

}

export interface UserA1{
  id: number;
  login: string;
  email: string;
  sessid: string;
  expire_at: string;
}

export interface UserA1_b{
  id: number;
  login: string;
  email: string;
  passwd: string;
}

