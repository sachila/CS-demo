import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Category } from '../models/category-enum';
import { VehicleResponse } from '../models/vehicle-response.model';
import { VehicleModel } from '../models/vehicle.model';
import { GlobalService } from './global.service';

@Injectable({
    providedIn: 'root'
})
export class VehicleCacheService {
    private data: VehicleResponse; //dictionary of row id -> current value for all rows

    private _dataInvalid: Subject<void> = new Subject();
    //event raised at start of data load to signal that data is not reliable. All caches should be cleared.
    public dataInvalid: Observable<void> = this._dataInvalid.asObservable();

    private _dataChanged: Subject<VehicleResponse> = new Subject();
    //event raised with the full data set after any change has been applied (after an update or after a load)
    public dataChanged: Observable<VehicleResponse> = this._dataChanged.asObservable();

    constructor(
        private globalService: GlobalService
    ) { }

    public loadData(response: VehicleResponse) {
        this._dataInvalid.next(); //raise event to request all external caches are cleared too
        // update selected status initially
        this.updateSelectedStatus(response, true);
        // set the cache data
        this.data = response;
        this._dataChanged.next(this.data);
    }

    private updateSelectedStatus(response: VehicleResponse, status: boolean) {
        Object.values(response.data).forEach(item => item.selected = status);
        return response;
    }

    public getCategories(): string[] {
        let keys = Object.keys(Category)
        return keys.map(k => Category[k as any]).map(v => v as string)
    }

    public getVehiclesArray(): VehicleModel[] {
        if (!this.data) return [];
        return this.getArrayFromDictionary(this.data.data);
    }

    private getArrayFromDictionary<T>(dictionary: { [key: string]: T }): T[] {
        return dictionary ? Object.values(dictionary) : [];
    }

    public getFilteredVehicles(): VehicleModel[] {
        let list = this.getVehiclesArray()
        if (this.globalService.currentCategory.value) {
            list = list.filter((item) => item.category === this.globalService.currentCategory.value)
        }
        if (this.globalService.nameFilter.value) {
            list = list.filter((item) => item.name.includes(this.globalService.nameFilter.value))
        }
        if (this.globalService.tagFilter.value) {
            list = list.filter((item) => item.tags.find(tag => tag.includes(this.globalService.tagFilter.value)))
        }

        return list;
    }


}
