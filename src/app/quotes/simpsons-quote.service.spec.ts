import { TestBed } from '@angular/core/testing';

import { SimpsonsQuoteService } from './simpsons-quote.service';

describe('SimpsonsQuoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpsonsQuoteService = TestBed.get(SimpsonsQuoteService);
    expect(service).toBeTruthy();
  });
});
