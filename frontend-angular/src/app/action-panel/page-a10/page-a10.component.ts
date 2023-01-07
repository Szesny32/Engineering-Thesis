import { Component, OnInit } from '@angular/core';
import { A10Service } from 'src/app/services/a10.service';
@Component({
  selector: 'app-page-a10',
  templateUrl: './page-a10.component.html',
  styleUrls: ['./page-a10.component.scss']
})
export class PageA10Component implements OnInit {

  constructor(private service: A10Service) { }

  files: Files[] = [];
  user_id: number = 1;
  ngOnInit(): void {
    this.getStorage();
  }

  getStorage(){
    this.service.getStorage(this.user_id).subscribe(files => this.files = files);
  }


  downloadFile(file_id: number){  
    this.service.downloadFile(file_id).subscribe(data => {
      console.log(data);
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);


      // const link = document.createElement('a');
      // link.href = url;
      // link.download = "download.txt"; // Ustaw nazwę pliku jako atrybut 'download'
    
      // // Dodaj link do dokumentu i kliknij go
      // document.body.appendChild(link);
      // link.click();
    
      // // Usuń link z dokumentu
      // document.body.removeChild(link);

    });
  }

}


export interface Files{
  id: number;
  url:string;
  filename: string;
}
