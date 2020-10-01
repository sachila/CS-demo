import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category-enum';
import { GlobalService } from 'src/app/services/global.service';
import { VehicleCacheService } from 'src/app/services/vehicle-cache.service';

@Component({
    selector: 'app-select-category',
    templateUrl: './select-category.component.html',
    styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {


    public selectedCategory: string;
    public categories: string[];
    constructor(
        private vehicleCache: VehicleCacheService,
        private globalService: GlobalService,
    ) { }

    ngOnInit() {
        this.categories = this.vehicleCache.getCategories();
        this.selectedCategory = this.categories[0];
        this.categoryChanged();
    }

    categoryChanged(): void {
        this.globalService.currentCategory.value = this.selectedCategory;
    }

}
