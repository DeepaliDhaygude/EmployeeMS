import { TestBed } from '@angular/core/testing';

import { AdmindeptService } from './admindept.service';

describe('AdmindeptService', () => {
  let service: AdmindeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
