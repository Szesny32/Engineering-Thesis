import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CWEService } from 'src/app/cwe.service';
import { CWE } from 'src/app/data-models/cwe';
import { Vulnerability } from 'src/app/data-models/vulnerability';
@Component({
  selector: 'app-cwe-page',
  templateUrl: './cwe-page.component.html',
  styleUrls: ['./cwe-page.component.scss']
})
export class CwePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CWEService) { }

  id:Number; 
  @Input()   selectedVulnerability: Vulnerability;
  ngOnInit(): void {

  }


}
