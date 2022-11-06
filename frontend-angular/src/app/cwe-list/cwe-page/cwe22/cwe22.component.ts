import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
@Component({
  selector: 'app-cwe22',
  templateUrl: './cwe22.component.html',
  styleUrls: ['./cwe22.component.scss']
})
export class Cwe22Component implements OnInit {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api/cwe22/?filename=';
  filename: string = "user-manual";

  images: string[] = [
    "/assets/images/1.png",
    "/assets/images/2.png",
  ];
  alttext: string[] = [
    "Missing 1.png",
    "Missing 2.png",
  ];

  selectedLevel: number = 0;
  dialogs: Dialog[] =[
    { 
      dialog: 'Zapewne domyślasz się, że manipując parametrem możesz uzyskać dostęp do innego pliku. Jeżeli są to tylko pliki umieszczone w publicznym katalogu to jeszcze nie jest tak źle. CWE-22 to przypadek pozwalający uzyskać dostęp niemal do każdego katalogu i pliku. Wszystko dzięki dodaniu ciągów <p class="pp">"../"</p> - które umożliwiają wyjść poza aktualny katalog.', 
    },
    {
      dialog: 'Po pobraniu pliku: <p class="pp">user-manual</p>, w liście pobranych plików zobaczysz coś takiego:<br><br>' , 
      image: "/assets/images/2.png",
    },
    {
      dialog: 'Pewnie zauważyłeś, że <p class="pp">filename</p> jest parametrem przyjmującym nazwę pobieranego pliku. Parametr można podmienieć na dowolny <br> Przyjrzyjmy się, jak wygląda to po stronie serwera:<br><br><div class="code">return response()->download(storage_path("public-data/".$request->filename));</div><br><br>W normalnym działaniu będzie wyglądać to tak:<br><br><div class="code">return response()->download(storage_path("public-data/user-manual"));<br></div>'
    },
    {
      dialog: 'Jednakże, programista nie może ufać niczemu co pochodzi od użytkownika. Załóżmy, że pliki na serwerze mają taką strukturę: <br><br>',
      image: "/assets/images/1.png",
    },
    {
      dialog: 'Jeżeli podmienisz wartość parametru <b>filename</b> na "../etc/passwd" uzyskasz dostęp do pliku znajdującego się w innym katalogu. Stanie się tak, ponieważ programista nie zabezpieczył tego parametru:<br><br><div class="code">return response()->download(storage_path("public-data/../etc/passwd"));</div> <br><br>Można było się przed tym zabezpieczyć. Zawsze należy sanityzować dane i sprawdzić czy to co użytkownik wysłał jest tym czego oczekujemy:<br><br><div class="code">$filename = $request->filename;<br>if($filename=="user-manual")<br>return response()->download(storage_path("public-data/user-manual.txt"));</div>'
    },
  ]
  

  ngOnInit(): void {
  }

  downloadFile(filename: string): void {
    window.open(this.ROOT_URL + filename);
  }

  setDialog(id: number): void{
    this.selectedLevel = id;
  }


}


export interface Dialog{
  dialog: string;
  image?: string |null;
}