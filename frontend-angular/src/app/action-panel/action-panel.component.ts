import { Component, OnInit, Input  } from '@angular/core';
import { Vulnerability } from 'src/app/data-models/vulnerability';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss']
})
export class ActionPanelComponent implements OnInit {

  constructor() { }

  id:Number; 
  @Input()   selectedVulnerability: Vulnerability;
  ngOnInit(): void {

  }

}

