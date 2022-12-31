import { Component, OnInit } from '@angular/core';
import { Buffer } from 'buffer';
@Component({
  selector: 'app-base64decoder',
  templateUrl: './base64decoder.component.html',
  styleUrls: ['./base64decoder.component.scss']
})
export class Base64decoderComponent implements OnInit {

  constructor() { }
  encodedPasswd: string="";
  decodedPasswd: string ="";

  ngOnInit(): void {
  }

decode(){
  this.decodedPasswd = Buffer.from(this.encodedPasswd, 'base64').toString();
}

}
