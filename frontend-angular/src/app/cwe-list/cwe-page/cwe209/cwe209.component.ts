import { Component, OnInit } from '@angular/core';
import { CWEService } from 'src/app/cwe.service';

@Component({
  selector: 'app-cwe209',
  templateUrl: './cwe209.component.html',
  styleUrls: ['./cwe209.component.scss']
})
export class Cwe209Component implements OnInit {

  constructor(private service: CWEService) { }

  ngOnInit(): void {
  }

  log: string;

  getLog() {
    this.service.CWE209()
      .subscribe((log: string) => {
        this.log = log;
        console.log(log);
      });
  }


}
