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
 

  @Output() response = new EventEmitter<string>();
  


 passwd1: string;
 passwd2: string;


  



  ngOnInit(): void {
  }


  submit(passwd: string, passwd_confirm: string): void {

    if(passwd!=passwd_confirm){
      this.response.emit("Passwords don't match");
      return;
    }
    
      this.service.vuln_changePsswd(this.user.id, passwd, passwd_confirm)
      .subscribe(response  => {
        console.log(response);
        this.response.emit(response['message']);
      });
    
    this.submitForm.emit();
  }
}
