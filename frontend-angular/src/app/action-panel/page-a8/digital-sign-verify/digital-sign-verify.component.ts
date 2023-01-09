import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-digital-sign-verify',
  templateUrl: './digital-sign-verify.component.html',
  styleUrls: ['./digital-sign-verify.component.scss']
})
export class DigitalSignVerifyComponent implements OnInit {

  constructor() { }

  @Input() public_key: string;
  @Input() signature: string;
  
  @Output() requestEmitter = new EventEmitter<{ public_key: string, signature: string }>();

  ngOnInit(): void {
  
  }

  checkSign(){
    this.requestEmitter.emit({
      public_key: this.public_key,
      signature: this.signature
    });
  }

}
