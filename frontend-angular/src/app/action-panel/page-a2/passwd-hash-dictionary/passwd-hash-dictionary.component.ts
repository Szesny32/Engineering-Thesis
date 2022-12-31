import { Component, OnInit } from '@angular/core';
import { A2Service } from 'src/app/services/a2.service';

@Component({
  selector: 'app-passwd-hash-dictionary',
  templateUrl: './passwd-hash-dictionary.component.html',
  styleUrls: ['./passwd-hash-dictionary.component.scss']
})
export class PasswdHashDictionaryComponent implements OnInit {

  constructor(private service: A2Service) { }

  pairs: PasswdHashPair[];

  ngOnInit(): void {
    this.service.getDictionary().subscribe(response  => {
      this.pairs = response;
    });
  }

}

export interface PasswdHashPair{
  passwd: string;
  hash: string;
}