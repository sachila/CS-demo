import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { Router } from '@angular/router';
import { AppRoutingModule, exportedRoutes } from './app-routing.module';
import { RemoteService } from './services/remote.service';
import { VehicleLoadService } from './services/vehicle-load.service';
import { VehicleCacheService } from './services/vehicle-cache.service';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ResultsViewComponent } from './components/results-view/results-view.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { GlobalService } from './services/global.service';
import { FilterComponent } from './components/filter/filter.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        LeftPanelComponent,
        SelectCategoryComponent,
        ResultsViewComponent,
        FilterComponent,
        RightPanelComponent,
        ImageViewerComponent,
        SpinnerComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // material modules
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        OverlayModule,
        PortalModule,
        ScrollingModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [MatListModule],
    providers: [RemoteService, VehicleLoadService, VehicleCacheService, GlobalService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private router: Router) {
        this.router.resetConfig(exportedRoutes);
    }
}
