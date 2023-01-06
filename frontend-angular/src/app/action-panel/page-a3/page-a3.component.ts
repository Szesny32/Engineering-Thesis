import { Component, OnInit } from '@angular/core';
import { A3Service } from 'src/app/services/a3.service';
import { idText } from 'typescript';
import { UserA1_b } from '../page-a1/page-a1.component';

@Component({
  selector: 'app-page-a3',
  templateUrl: './page-a3.component.html',
  styleUrls: ['./page-a3.component.scss']
})
export class PageA3Component implements OnInit {

  constructor (private service : A3Service){}
  selectedLevel: number;
  user: UserA1_b;
  users : UserA1_b[];

  ngOnInit(): void {
    this.setDialog(0);
    this.updateUsersData();
  }

  
  setDialog(id: number): void{
    this.selectedLevel = id;
    this.user ={id: 0, login: "", email: "", passwd: ""};

  }

  updateUser(user: UserA1_b){
    this.user = user;
    if(user==null)
    this.user ={id: 0, login: "", email: "", passwd: ""};

  }

  updateUsersData():void{
    this.service.getUsers().subscribe(users => this.users = users);
  }

 


}
