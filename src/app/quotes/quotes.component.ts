import { Component, OnInit } from '@angular/core';
import {SimpsonsQuoteService} from './simpsons-quote.service';
import {Quote} from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  protected quotes: Quote[];

  constructor(private simpQuotesService: SimpsonsQuoteService) { }

  ngOnInit() {
    this.simpQuotesService.getQuote().subscribe(quotes => this.quotes = quotes);
  }

}
