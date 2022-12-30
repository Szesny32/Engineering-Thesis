import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { A1Service } from 'src/app/services/a1.service';

@Component({
  selector: 'app-http-change-password-form',
  templateUrl: './http-change-password-form.component.html',
  styleUrls: ['./http-change-password-form.component.scss']
})
export class HTTPChangePasswordFormComponent implements OnInit {

  @Input() selectedLevel: number;
  @Output() submitForm = new EventEmitter();

  constructor(private service: A1Service) { }
  id: number = 1;
  sessid: string ="";
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
      this.service.secure_changePsswd(this.id, this.sessid, passwd, passwd_confirm) 
      .subscribe(response => {
        this.response = response['message'];
    })
    } else {

      this.service.vuln_changePsswd(this.id, passwd, passwd_confirm)
      .subscribe(response  => {
        console.log(response);
       this.response = response['message'];
      });
    }
    this.submitForm.emit();
  }

}
