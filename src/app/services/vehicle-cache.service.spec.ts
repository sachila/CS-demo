import { inject, TestBed } from '@angular/core/testing';

import { VehicleCacheService } from './vehicle-cache.service';

describe('VehicleCacheService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    let VehicleCacheService: VehicleCacheService;

    beforeEach(inject([VehicleCacheService], (injectedService: VehicleCacheService) => {
        VehicleCacheService = injectedService;
    }));

    it('should be created', () => {
        VehicleCacheService
        expect(VehicleCacheService).toBeTruthy();
    });
});
