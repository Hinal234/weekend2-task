import { TestBed } from '@angular/core/testing';

import { FooddetailsService } from './fooddetails.service';

describe('FooddetailsService', () => {
  let service: FooddetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooddetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
