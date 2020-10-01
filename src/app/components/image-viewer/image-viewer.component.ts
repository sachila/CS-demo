import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange, MatSelectionList, MatSelectionListChange } from '@angular/material';
import { Subscription } from 'rxjs';
import { VehicleModel } from 'src/app/models/vehicle.model';
import { GlobalService } from 'src/app/services/global.service';
import { VehicleCacheService } from 'src/app/services/vehicle-cache.service';
import { VehicleLoadService } from 'src/app/services/vehicle-load.service';

@Component({
    selector: 'app-image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

    public vehicles: VehicleModel[] = [];
    private subscriptions: Subscription[] = [];

    constructor(
        private vehicleCacheService: VehicleCacheService,
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
                this.globalService.imageSelection.value = null
                this.updateData()
            })
        )
        // when the filer name get changed, this event get fired and update the data
        this.subscriptions.push(
            this.globalService.nameFilter.onChanged().subscribe(() => {
                this.globalService.imageSelection.value = null
                this.updateData()
            })
        )
        // when the filter tag gets changed, this event get fired and update the data
        this.subscriptions.push(
            this.globalService.tagFilter.onChanged().subscribe(() => {
                this.globalService.imageSelection.value = null
                this.updateData()
            })
        )
        this.subscriptions.push(
            this.globalService.imageSelection.onChanged().subscribe(() => {
                this.updateData()
            })
        )
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }

    private updateData(): void {
        let list = this.vehicleCacheService.getFilteredVehicles();

        // update the images based on result view selection.
        // only show the selected images here
        if (this.globalService.imageSelection.value) {
            let matOptionSelection: MatSelectionList = this.globalService.imageSelection.value;
            let selectedOptions = matOptionSelection.selectedOptions;
            let ids = selectedOptions.selected.map(m => m.value);

            list = list.filter(item => ids.includes(item.id))
        }

        this.vehicles = list;
    }

    public close(item: VehicleModel): void {
        this.globalService.latestCloseImageId.value = item.id;
    }
}
