import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    public filterNameModel: string;
    public filterTagModel: string;

    constructor(
        public globalService: GlobalService
    ) {
        this.globalService.currentCategory.onChanged().subscribe(() => {
            this.reset()
        })
    }

    ngOnInit() {
    }

    public reset(): void {
        this.filterNameModel = null;
        this.filterTagModel = null;
        this.filterData();
    }
    public filterData() {
        this.globalService.nameFilter.value = this.filterNameModel
        this.globalService.tagFilter.value = this.filterTagModel
    }
}
