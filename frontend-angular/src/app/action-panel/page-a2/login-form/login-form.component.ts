import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { A2Service } from 'src/app/services/a2.service';

@Component({
  selector: 'app-a2-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private service: A2Service) { }

  passwd: string;
  login: string;
  @Output() response = new EventEmitter<string>();
  @Input() selectedLevel: number;

  ngOnInit(): void {
    this.response.emit("");
  }

  logIn(login: string, password: string){
  this.service.logIn(login, password, this.selectedLevel).subscribe(response  => {
    this.response.emit(response['message']);
  });

}

}
