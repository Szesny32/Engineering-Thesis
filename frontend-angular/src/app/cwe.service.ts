import { Injectable } from '@angular/core';
import { CWE } from './data-models/cwe';
import { Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CWEService {

  constructor( private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8000/api';
  selectedCWE: number = 0;
  getList(): Observable<CWE[]>{

    return this.http.get<CWE[]>(this.ROOT_URL + '/cwe-list');
  }
  getSelectedCWE(): Observable<number>{
    const x  = of(this.selectedCWE);
    return x;
  }
  setCWE(id: number): void{
    this.selectedCWE = id;
  }
}

