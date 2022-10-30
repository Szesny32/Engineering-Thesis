import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cwe-page',
  templateUrl: './cwe-page.component.html',
  styleUrls: ['./cwe-page.component.scss']
})
export class CwePageComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { }
  id:Number;  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

}
