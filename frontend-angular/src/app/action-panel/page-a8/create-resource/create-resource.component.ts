import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-resource',
  templateUrl: './create-resource.component.html',
  styleUrls: ['./create-resource.component.scss']
})
export class CreateResourceComponent implements OnInit {

  constructor() { }

  resource: string = "";
  @Output() resourceEmitter = new EventEmitter<string>();



  ngOnInit(): void {
  }

  emitResource(){
    this.resourceEmitter.emit(this.resource);
  }


}
