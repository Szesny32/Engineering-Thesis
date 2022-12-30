import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { A1Service } from 'src/app/services/a1.service';
import { UserA1, UserA1_b } from '../page-a1.component';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  constructor(private service: A1Service) { }

  @Input() selectedLevel: number;

  @Output() submitForm = new EventEmitter();

  @Input() user: UserA1;
 


  


 passwd1: string;
 passwd2: string;
 response: string;

  



  ngOnInit(): void {
  }


  submit(secure: boolean, passwd: string, passwd_confirm: string): void {

    if(passwd!=passwd_confirm){
      this.response = "Passwords don't match";
      return;
    }
    
      this.service.vuln_changePsswd(this.user.id, passwd, passwd_confirm)
      .subscribe(response  => {
        console.log(response);
       this.response = response['message'];
      });
    
    this.submitForm.emit();
  }

 
  

}
