import { TestBed } from '@angular/core/testing';

import { TabhighlightService } from './tabhighlight.service';

describe('TabhighlightService', () => {
  let service: TabhighlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabhighlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
