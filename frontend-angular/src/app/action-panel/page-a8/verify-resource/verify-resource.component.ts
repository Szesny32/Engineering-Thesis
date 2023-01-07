import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-verify-resource',
  templateUrl: './verify-resource.component.html',
  styleUrls: ['./verify-resource.component.scss']
})
export class VerifyResourceComponent implements OnInit {

  constructor() { }

  @Input() resource: string;

  @Output() resourceEmitter = new EventEmitter<string>();



  ngOnInit(): void {
  }

  emitResource(){
    this.resourceEmitter.emit(this.resource);
  }

}
