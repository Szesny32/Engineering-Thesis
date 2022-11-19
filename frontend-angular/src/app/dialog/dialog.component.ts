import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  setDialog(id: number): void{
    this.selectedLevel = id;
  }


  images: string[] = [
    "/assets/images/1.png",
    "/assets/images/2.png",
  ];
  alttext: string[] = [
    "Missing 1.png",
    "Missing 2.png",
  ];

  selectedLevel: number = 0;


  levels: Dialogs[]=[
    {
      dialogs:[
        { 
          dialog: 'Zapewne domyślasz się, że manipując parametrem możesz uzyskać dostęp do innego pliku. Jeżeli są to tylko pliki umieszczone w publicznym katalogu to jeszcze nie jest tak źle. CWE-22 to przypadek pozwalający uzyskać dostęp niemal do każdego katalogu i pliku. Wszystko dzięki dodaniu ciągów <p class="pp">"../"</p> - które umożliwiają wyjść poza aktualny katalog.', 
          type: 1,
        },
      ]
    },
    {
      dialogs:[
        {
          dialog: 'Po pobraniu pliku: <p class="pp">user-manual</p>, w liście pobranych plików zobaczysz coś takiego:' , 
          type: 1,
        },
        {
          dialog: "/assets/images/2.png" , 
          type: 2,
        },
        {
          dialog: ' Przyjrzyjmy się, jak wygląda to po stronie serwera: <div class="code">return response()->download(storage_path("public-data/".$request->filename));</div><br><br>W normalnym działaniu będzie wyglądać to tak:<br><div class="code">return response()->download(storage_path("public-data/user-manual"));<br></div>',
          type: 1,
        },
      ]
    },
    {
      dialogs:[
        {
          dialog: 'Pewnie zauważyłeś, że <p class="pp">filename</p> jest parametrem przyjmującym nazwę pobieranego pliku. Parametr można podmienieć na dowolny. Załóżmy, że pliki na serwerze mają taką strukturę: <br><br>',
          type: 1,
        },
        {
          dialog: "/assets/images/1.png",
          type: 2,
        },
        {
          dialog: 'Jeżeli podmienisz wartość parametru <p class="pp">filename</p> na <p class="pp">"../etc/passwd"</p> uzyskasz dostęp do pliku znajdującego się w innym katalogu. Stanie się tak, ponieważ programista nie zabezpieczył tego parametru:<br><br><div class="code">return response()->download(storage_path("public-data/../etc/passwd"));</div>',
          type: 1,
        },
      ]
    },
    {
      dialogs:[
        {
          dialog: 'Programista nie może ufać niczemu co pochodzi od użytkownika. Można było się przed tym zabezpieczyć. Zawsze należy sanityzować dane i sprawdzić czy to co użytkownik wysłał jest tym czego oczekujemy:<br><br><div class="code">$filename = $request->filename;<br>if($filename=="user-manual")<br>return response()->download(storage_path("public-data/user-manual.txt"));</div>',
          type: 1,
        },
      ]
    }


  ];

}
export interface Dialogs{
  dialogs: Dialog[]
}

export interface Dialog{
  dialog: string;
  type: number;
}