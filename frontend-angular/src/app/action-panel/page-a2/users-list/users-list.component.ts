import { Component, Input, OnInit } from '@angular/core';
import { UserA2 } from '../page-a2.component';


@Component({
  selector: 'app-a2-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersA2ListComponent implements OnInit {

  constructor() { }
  @Input() users: UserA2[];
  @Input() selectedLevel: number;

  ngOnInit(): void {
  }

}
