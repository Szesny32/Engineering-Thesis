import { Component, OnInit } from '@angular/core';
import { A2Service } from 'src/app/services/a2.service';


@Component({
  selector: 'app-page-a2',
  templateUrl: './page-a2.component.html',
  styleUrls: ['./page-a2.component.scss']
})
export class PageA2Component implements OnInit {

  constructor(private service: A2Service) { }
  selectedLevel: number = 0;
  users:UserA2[];
  ngOnInit(): void {
    this.updateUsersData(0);
  }


  updateUsersData(encryption_type: number):void{
    this.service.getUsers(encryption_type).subscribe(users => this.users = users);
  }

  setDialog(id: number): void {
    this.selectedLevel = id;
    this.updateUsersData(id);
  }

}
export interface UserA2{
  id: number;
  login: string;
  email: string;
  salt: string;
  passwd: string;
}