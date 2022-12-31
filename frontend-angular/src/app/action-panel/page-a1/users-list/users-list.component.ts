import { Component, OnInit , Input} from '@angular/core';
import { UserA1_b } from '../page-a1.component';

@Component({
  selector: 'app-a1-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersA1ListComponent implements OnInit {

  constructor() { }
  @Input() id: number;
  @Input() users: UserA1_b[];

  ngOnInit(): void {
  }

}
