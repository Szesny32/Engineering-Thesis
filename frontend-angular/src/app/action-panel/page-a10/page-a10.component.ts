import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { A10Service } from 'src/app/services/a10.service';

@Component({
  selector: 'app-page-a10',
  templateUrl: './page-a10.component.html',
  styleUrls: ['./page-a10.component.scss']
})
export class PageA10Component implements OnInit {

  constructor(private service: A10Service) { }

  files: UserFile[] = [];
  user_id: number = 1;
  response: string = "";

  url:string = "";
  filename:string = "";
  ngOnInit(): void {
    this.getStorage();
  }
  
  selectedLevel:number = 0;
  setDialog(page: number){
    this.selectedLevel = page;
    
  }

  getStorage(){
    this.service.getStorage(this.user_id).subscribe(files => this.files = files);
  }


  isValidUrl(url: string): boolean {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return urlRegex.test(url);
  }

  upload(filename: string, url: string, secured: boolean){
    this.response = "";
    const pathinfo = filename.split('.');
    const extension = pathinfo[pathinfo.length - 1];
      if(url.length==0){
      console.error('Empty URL');
      return;
    }
    if (extension !== 'jpg' && extension !== 'png' && extension !== 'txt') {
      console.error('Unsupported file extension');
      return;
    }
    if(secured){
      if (! this.isValidUrl(url)) {
        console.error('Invalid URL');
        return;
      } 
      this.service.uploadSecured(this.user_id,filename,url).subscribe(response => console.log(response.message));
   
    } else {
      this.service.upload(this.user_id,filename,url).subscribe(response => console.log(response.message));
    }
    this.getStorage();
  }



  base64ToArrayBuffer(base64: string) {
    const binaryString = window.atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  downloadFile(file: UserFile){  
    this.service.downloadFile(file.id).subscribe(data=> {
    const blob = new Blob([this.base64ToArrayBuffer(data.fileContents)], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = data.fileName; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    });
  }
}


export interface UserFile{
  id: number;
  url:string;
  filename: string;
}

export interface File{
  fileName: string;
  fileContents: string;
}

export interface A10Response{
  message: string
}