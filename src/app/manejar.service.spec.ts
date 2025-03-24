import { TestBed } from '@angular/core/testing';

import { ManejarService } from './manejar.service';

describe('ManejarService', () => {
  let service: ManejarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
