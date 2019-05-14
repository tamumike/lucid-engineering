/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestViewService } from './request-view.service';

describe('Service: RequestView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestViewService]
    });
  });

  it('should ...', inject([RequestViewService], (service: RequestViewService) => {
    expect(service).toBeTruthy();
  }));
});
