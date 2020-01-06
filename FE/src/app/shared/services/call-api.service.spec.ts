import { TestBed } from '@angular/core/testing';

import { CallApiService } from './call-api.service';

describe('CallApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallApiService = TestBed.get(CallApiService);
    expect(service).toBeTruthy();
  });
});
