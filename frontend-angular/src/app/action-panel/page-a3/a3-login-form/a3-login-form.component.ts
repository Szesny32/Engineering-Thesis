import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { A3Service } from 'src/app/services/a3.service';
import { UserA1_b } from '../../page-a1/page-a1.component';


@Component({
  selector: 'app-a3-login-form',
  templateUrl: './a3-login-form.component.html',
  styleUrls: ['./a3-login-form.component.scss']
})
export class A3LoginFormComponent implements OnInit {

  constructor(private service: A3Service) { }
  login: string = "";
  password: string = "";
  @Output() response = new EventEmitter<UserA1_b>();
  @Input() selectedLevel: number;

  ngOnInit(): void {
  }
  signIn_injectionFree(): void{
    this.service.signIn_injectionFree(this.login, this.password) 
    .subscribe((user: UserA1_b) => {
      this.response.emit(user);
    });
  }
  signIn_injection(): void{
    this.service.signIn_injection(this.login, this.password) 
    .subscribe((user: UserA1_b) => {
      this.response.emit(user);
    });
  }
}

