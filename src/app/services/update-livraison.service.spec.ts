import { TestBed } from '@angular/core/testing';

import { UpdateLivraisonService } from './update-livraison.service';

describe('UpdateLivraisonService', () => {
  let service: UpdateLivraisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateLivraisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
