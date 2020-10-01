import { TestBed } from '@angular/core/testing';

import { VehicleLoadService } from './vehicle-load.service';

describe('VehicleLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleLoadService = TestBed.get(VehicleLoadService);
    expect(service).toBeTruthy();
  });
});
