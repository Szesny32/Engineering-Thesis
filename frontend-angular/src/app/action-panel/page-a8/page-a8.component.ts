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
  activeKey: Key = {id:0, private_key:"", public_key: ""};
  resource: string ="";
  response: string ="";
  signature: Signature = {resource: "", signature: "", public_key: ""};
  signConfirmation: SignConfirmation = {signatureIsValid: false};
  ngOnInit(): void {
    this.getKeys();
    console.log(this.keys); 
  }
  getKeys(){
    this.service.getKeys().subscribe(keys=>this.keys = keys);
  }

  signResource(key: Key){
    

    this.activeKey = key;
    if(key.id == 0)
      this.response ="Nie wybrano klucza.";
    else if(this.resource.length==0)
      this.response ="Najpierw utwórz wiadomość, którą chcesz podpisać."
    else{
      this.service.sign(this.activeKey.id, this.resource).subscribe(signature=> this.signature=signature);
      this.response = "";
    }
      


  }
  updateResource(resource: string){
    this.resource = resource;
  }


  checkSignature(event: { signature: string, public_key: string }){
    this.service.checkSignature(this.resource, event.signature, event.public_key ).subscribe(confirmation => this.signConfirmation=confirmation);

  }


}

export interface Key{
  id: number;
  private_key: string;
  public_key: string;
}

export interface Signature{
  resource: string;
  signature: string;
  public_key: string;
}

export interface SignConfirmation{
  signatureIsValid:boolean;
}