import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Key } from '../page-a8.component';

@Component({
  selector: 'app-digital-sign',
  templateUrl: './digital-sign.component.html',
  styleUrls: ['./digital-sign.component.scss']
})
export class DigitalSignComponent implements OnInit {

  constructor() {}
  @Input() keys: Key[];
  @Output() keyEmitter = new EventEmitter<Key>();

  activeKey: Key = {id:0, private_key:"", public_key: ""};
  ngOnInit(): void {}

  emitKey(){
    this.keyEmitter.emit(this.activeKey);
  }


}
