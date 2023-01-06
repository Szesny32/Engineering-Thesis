import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a7',
  templateUrl: './page-a7.component.html',
  styleUrls: ['./page-a7.component.scss']
})
export class PageA7Component implements OnInit {

  constructor() { }

  login: string =""
  userPin = "";
  pin = "1111"
  messages: string[] = [];
  checkedPin: string ="";
  
  n: number = 4;




  ngOnInit(): void {
    this.generatePin();
  }

  type(op: number) {
    if (op >= 0 && op <= 9 && this.userPin.length < this.n) 
      this.userPin += op.toString();
     else if (op === -1 && this.userPin.length > 0) {
      this.userPin = this.pin.slice(0, -1);
    } else if (op === 10 && this.userPin.length === this.n) {
      console.log('send');
    }
  }

  checkPin() {
    const startTime = Date.now();
    const progressBar = document.getElementById('progressBar') as HTMLProgressElement;
    //const currentPin = document.getElementById('currentPin') as HTMLSpanElement;
    progressBar.value = 0;
    for (let i = 0; i <= 9999; i++) {
      progressBar.value = i;
      let pin = i.toString().padStart(4, '0');
      this.checkedPin = pin;
      if (this.isValidPin(pin)) {
        const endTime = Date.now();
        (endTime-startTime);
        this.addMessage(`Znaleziono poprawny PIN: ${pin}`);
        this.addMessage(`Atak zakończono po ${endTime-startTime} ms`);
        break;
      } else {
        this.addMessage(`Niepowodzenie dla PIN: ${pin}`);
      }
    }
  }


  addMessage(message: string) {
    this.messages.unshift(message);

    if (this.messages.length > 100) {
      this.messages.splice(100, this.messages.length - 100);
    }
  }



  generatePin(){
    let newPin = '';
    for (let i = 0; i < this.n; i++) {
      newPin += Math.floor(Math.random() * 10);
    }
    this.pin = newPin;
  }


  isValidPin(pin: string) {
    return pin === this.pin;
  }


}
