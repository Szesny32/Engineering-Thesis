import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CWE } from '../data-models/cwe';
import { CWEService } from '../cwe.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private service: CWEService) { }
  

  CWEs: CWE[];
  @Output() eselectedCWE: EventEmitter<CWE> = new EventEmitter();
  selectedCWE: CWE;
  ngOnInit(): void {
    this.getCWEs()

  }
  getCWEs(){
    this.service.getList().subscribe(list => {
      this.CWEs = list;     
      this.selectCWE(this.CWEs[0]);
    });
  }

  selectCWE(selectedCWE: CWE){
   this.eselectedCWE.emit(selectedCWE);
   this.selectedCWE = selectedCWE; 
  }

}
