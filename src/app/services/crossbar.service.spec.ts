import {inject, TestBed} from '@angular/core/testing';

import {CrossbarService} from './crossbar.service';

describe('CrossbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrossbarService]
    });
  });

  it('should be created', inject([CrossbarService], (service: CrossbarService) => {
    expect(service).toBeTruthy();
  }));
});
