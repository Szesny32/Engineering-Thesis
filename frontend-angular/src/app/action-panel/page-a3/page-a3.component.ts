import { Component, OnInit } from '@angular/core';
import { A3Service } from 'src/app/services/a3.service';
import { UserA1_b } from '../page-a1/page-a1.component';

@Component({
  selector: 'app-page-a3',
  templateUrl: './page-a3.component.html',
  styleUrls: ['./page-a3.component.scss']
})
export class PageA3Component implements OnInit {

  constructor (){}

  user: UserA1_b;

  ngOnInit(): void {
  }

  selectedLevel: number = 0;
  setDialog(id: number): void{
    this.selectedLevel = id;
  }

  updateUser(user: UserA1_b){
    this.user = user;
  }
 


}
