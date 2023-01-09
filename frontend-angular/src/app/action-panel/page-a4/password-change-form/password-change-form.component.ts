import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.scss']
})
export class PasswordChangeFormComponent implements OnInit {

  constructor() { }
  selectedLevel: number = 0;

  name: string = "";
  surname: string ="";
  date: string = ""
  birthplace: string= "";
  answer1: string = "";
  answer2: string = "";
  answer3: string = "";
  newPassword: string ="";
  confirmNewPassword:string = "";

  ngOnInit(): void {
     this.typeAll();
  }
  setDialog(id: number): void {
    this.selectedLevel = id;

  }


  async typeAll(){
    await this.delay(50)

  

    let name: string = "William";
    for (var i = 0; i < name.length; i++) {
      await this.delay(50);
      this.name+=name.charAt(i);
    }

    let surname: string ="Butcher";
    for (var i = 0; i < surname.length; i++) {
      await this.delay(50);
      this.surname+=surname.charAt(i);
    }

    let date: string = "16.12.1996"
    for (var i = 0; i < date.length; i++) {
      await this.delay(50);
      this.date+=date.charAt(i);
    }
      
    let birthplace: string= "Dunkeld";
    for (var i = 0; i < birthplace.length; i++) {
      await this.delay(50);
      this.birthplace+=birthplace.charAt(i);
    }

    let answer1: string = "Spice Girls";
    for (var i = 0; i < answer1.length; i++) {
      await this.delay(50);
      this.answer1+=answer1.charAt(i);
    }

    let answer2: string = "Rebecca";
    for (var i = 0; i < answer2.length; i++) {
      await this.delay(50);
      this.answer2+=answer2.charAt(i);
    }

    let answer3: string = "Terror";
    for (var i = 0; i < answer3.length; i++) {
      await this.delay(50);
      this.answer3+=answer3.charAt(i);
    }

    let newPassword: string ="qwerty";
    for (var i = 0; i < newPassword.length; i++) {
      await this.delay(50);
      this.newPassword+=newPassword.charAt(i);
    }

    let confirmNewPassword:string = "qwerty";
    for (var i = 0; i < confirmNewPassword.length; i++) {
      await this.delay(50);
      this.confirmNewPassword+=confirmNewPassword.charAt(i);
    }


  }



  delay(ms: number){
    return new Promise(resolve => {
      setInterval(resolve, ms); 
    });
  }
  


}
