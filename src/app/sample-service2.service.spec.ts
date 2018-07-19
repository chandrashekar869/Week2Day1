import { TestBed, inject } from '@angular/core/testing';

import { SampleService2Service } from './sample-service2.service';

describe('SampleService2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService2Service]
    });
  });

  it('should be created', inject([SampleService2Service], (service: SampleService2Service) => {
    expect(service).toBeTruthy();
  }));
});
