import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';
import { Subscription } from 'rxjs';
import { VehicleResponse } from 'src/app/models/vehicle-response.model';
import { VehicleModel } from 'src/app/models/vehicle.model';
import { GlobalService } from 'src/app/services/global.service';
import { VehicleCacheService } from 'src/app/services/vehicle-cache.service';
import { VehicleLoadService } from 'src/app/services/vehicle-load.service';

@Component({
    selector: 'app-results-view',
    templateUrl: './results-view.component.html',
    styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {

    public vehicles: VehicleModel[] = [];
    private subscriptions: Subscription[] = [];

    @ViewChild('imageList', { static: false }) imageSelection: MatSelectionList;

    constructor(
        private vehicleCacheService: VehicleCacheService,
        private vehicleLoadService: VehicleLoadService,
        private globalService: GlobalService,
    ) { }

    ngOnInit() {
        // initial update
        this.updateData()

        // update when the cache data get changed
        this.subscriptions.push(
            this.vehicleCacheService.dataChanged.subscribe((data) => {
                this.updateData()
            })
        )

        // when the category get changed, this event get fired and update the data
        this.subscriptions.push(
            this.globalService.currentCategory.onChanged().subscribe(() => {
                this.globalService.imageSelection.value = null;
                this.updateData()
            })
        )
        // when the filer name get changed, this event get fired and update the data
        this.subscriptions.push(
            this.globalService.nameFilter.onChanged().subscribe(() => {
                this.globalService.imageSelection.value = null
                this.imageSelection.selectAll();
                this.updateData()
            })
        )
        // when the filter tag gets changed, this event get fired and update the data
        this.subscriptions.push(
            this.globalService.tagFilter.onChanged().subscribe(() => {
                this.globalService.imageSelection.value = null
                this.imageSelection.selectAll();
                this.updateData()
            })
        )

        // when the image get closed, update the selection list
        this.subscriptions.push(
            this.globalService.latestCloseImageId.onChanged().subscribe((id) => {
                let option = this.imageSelection.selectedOptions.selected.find(i => i.value === id);
                this.imageSelection.selectedOptions.deselect(option)
                this.globalService.imageSelection.value = this.imageSelection;
            })
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }

    private updateData(): void {
        this.vehicles = this.vehicleCacheService.getFilteredVehicles();
    }

    selectionChange(item: MatSelectionListChange) {
        this.globalService.imageSelection.value = item.source;
    }
}
