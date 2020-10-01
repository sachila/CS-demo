import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VehicleCacheService } from 'src/app/services/vehicle-cache.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    public dataLoading = false;
    private subscriptions: Subscription[] = [];
    constructor(

        private vehicleCacheService: VehicleCacheService,
    ) { }

    ngOnInit() {
        this.subscriptions.push(
            this.vehicleCacheService.dataInvalid.subscribe((data) => {
                this.dataLoading = true
            })
        )
        this.subscriptions.push(
            this.vehicleCacheService.dataChanged.subscribe((data) => {
                this.dataLoading = false
            })
        )

    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }

}
