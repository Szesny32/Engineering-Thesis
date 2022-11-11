import { Component } from '@angular/core';
import { CWE } from './data-models/cwe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-angular';
  
  cwe: CWE ={id:0, description: "", name: ""};

  selectCWE(selectedCWE:CWE){
    this.cwe = selectedCWE;
    console.log(selectedCWE.id);
  }
}
