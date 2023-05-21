import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
    constructor(
      @Inject('apiUrl') private apiUrl:string,
      private _http:HttpClient) { }
  getCards():Observable<Card[]>{
    return this._http.get<Card[]>(this.apiUrl +'/cards');
  }
}
