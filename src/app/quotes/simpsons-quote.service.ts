import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quote} from './quote';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsQuoteService {

  constructor(private http: HttpClient) { }

  public getQuote(): Observable<Quote[]> {
    return this.http
      .get<Quote[]>('https://thesimpsonsquoteapi.glitch.me/quotes?count=10');
  }
}
