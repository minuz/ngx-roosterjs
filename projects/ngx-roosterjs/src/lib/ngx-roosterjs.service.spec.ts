import { TestBed } from '@angular/core/testing';

import { NgxRoosterjsService } from './ngx-roosterjs.service';

describe('NgxRoosterjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRoosterjsService = TestBed.get(NgxRoosterjsService);
    expect(service).toBeTruthy();
  });
});
