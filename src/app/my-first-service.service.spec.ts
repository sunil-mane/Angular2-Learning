import { TestBed, inject } from '@angular/core/testing';
import { MyFirstServiceService } from './my-first-service.service';

describe('MyFirstServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyFirstServiceService]
    });
  });

  it('should ...', inject([MyFirstServiceService], (service: MyFirstServiceService) => {
    expect(service).toBeTruthy();
  }));
});
