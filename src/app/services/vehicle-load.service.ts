import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { VehicleResponse } from '../models/vehicle-response.model';
import { VehicleModel } from '../models/vehicle.model';
import { RemoteService } from './remote.service';
import { VehicleCacheService } from './vehicle-cache.service';

@Injectable({
    providedIn: 'root'
})
export class VehicleLoadService {

    constructor(
        private remoteService: RemoteService,
        private vehicleCacheService: VehicleCacheService,
    ) {
        // load all the data on application bootstrap
        this.loadAll();
    }

    public loadAll() {
        this.remoteService.get("vehicles.json")
            .subscribe((res: VehicleResponse) => {
                this.vehicleCacheService.loadData(res);
            })
    }
}
