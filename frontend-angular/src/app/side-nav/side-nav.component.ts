import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Vulnerability } from '../data-models/vulnerability';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private service: TaskService) { }
  ngOnInit(): void {
    this.getVulnerabilities();
  }
 
  vulnerabilities: Vulnerability[];
  @Output() emiter: EventEmitter<Vulnerability> = new EventEmitter();
  selectedVulnerability: Vulnerability;
  getVulnerabilities(){
    this.service.getList().subscribe(list => {
      this.vulnerabilities = list;
      this.selectVulnerability(this.vulnerabilities[0]);
    })
  }

  selectVulnerability(selectedVulnerability: Vulnerability){
    this.selectedVulnerability = selectedVulnerability;
    this.emiter.emit(selectedVulnerability);
  }

}
