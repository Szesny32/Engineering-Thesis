import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CWEService } from 'src/app/cwe.service';
import { CWE } from 'src/app/data-models/cwe';
@Component({
  selector: 'app-cwe-page',
  templateUrl: './cwe-page.component.html',
  styleUrls: ['./cwe-page.component.scss']
})
export class CwePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CWEService) { }

  id:Number; 
  @Input()   selectCWE: CWE;
  ngOnInit(): void {
    this.getActiveCWE();
   // this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  getActiveCWE(): void{
    this.service.getSelectedCWE().subscribe(id => this.id = id);
  }

}
