import { TestBed } from '@angular/core/testing';

import { AddnewmovieService } from './addnewmovie.service';

describe('AddnewmovieService', () => {
  let service: AddnewmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
