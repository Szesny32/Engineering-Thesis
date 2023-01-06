import { Component, OnInit } from '@angular/core';
import { A8Service } from 'src/app/services/a8.service';

@Component({
  selector: 'app-page-a8',
  templateUrl: './page-a8.component.html',
  styleUrls: ['./page-a8.component.scss']
})
export class PageA8Component implements OnInit {

  constructor(private service: A8Service) { }
  keys: Key[];
  ngOnInit(): void {
    this.getKeys();
    console.log(this.keys); 
  }
  getKeys(){
    this.service.getKeys().subscribe(keys=>
      {
        this.keys  = keys
        console.log(keys);
      });
  }
}

export interface Key{
  id: number;
  private_key: string;
  public_key: string;
}