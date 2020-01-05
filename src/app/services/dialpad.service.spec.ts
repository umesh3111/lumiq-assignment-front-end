import { TestBed } from '@angular/core/testing';

import { DialpadService } from './dialpad.service';

describe('DialpadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialpadService = TestBed.get(DialpadService);
    expect(service).toBeTruthy();
  });
});
