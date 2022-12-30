import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { A1Service } from 'src/app/services/a1.service';
import { UserA1 } from '../page-a1.component';

@Component({
  selector: 'app-http-change-password-form',
  templateUrl: './http-change-password-form.component.html',
  styleUrls: ['./http-change-password-form.component.scss']
})
export class HTTPChangePasswordFormComponent implements OnInit {

  @Input() selectedLevel: number;
  @Output() submitForm = new EventEmitter();

  @Input() user: UserA1;
  @Output() userChanged = new EventEmitter<UserA1>();


  constructor(private service: A1Service) { }
  passwd1: string="";
  passwd2: string="";
  response: string="";
  ngOnInit(): void {
  }
  submit(secure: boolean, passwd: string, passwd_confirm: string): void {

    if(passwd!=passwd_confirm){
      this.response = "Passwords don't match";
      return;
    }
    
    if(secure){
      this.service.secure_changePsswd(this.user.id, this.user.sessid, passwd, passwd_confirm) 
      .subscribe(response => {
        console.log(response);
        this.response = response['message'];
    })
    } else {

      this.service.vuln_changePsswd(this.user.id, passwd, passwd_confirm)
      .subscribe(response  => {
        console.log(response);
       this.response = response['message'];
      });
    }
    this.submitForm.emit();
  }


  refreshSession(){
    this.service.refreshSession(this.user.id).subscribe(user=>this.user  = user);
    this.userChanged.emit(this.user);
  }
  expireSession(){
    this.service.expireSession(this.user.id).subscribe(user=>this.user  = user);
    this.userChanged.emit(this.user);
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
