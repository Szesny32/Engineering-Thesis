import { Component } from '@angular/core';
import { CWE } from './data-models/cwe';
import { Vulnerability } from './data-models/vulnerability';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-angular';
  
  vulnerability: Vulnerability ={id:0, category: "", description: ""};

  selectVulnerability(selectedVulnerability:Vulnerability){
    this.vulnerability = selectedVulnerability;
  }
}
