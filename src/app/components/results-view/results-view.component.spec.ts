import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material';

import { ResultsViewComponent } from './results-view.component';

describe('ResultsViewComponent', () => {
    let component: ResultsViewComponent;
    let fixture: ComponentFixture<ResultsViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatListModule],
            declarations: [ResultsViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
