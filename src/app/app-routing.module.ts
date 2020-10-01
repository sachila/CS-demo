import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
    {
        path: '', component: MainPageComponent,
        children: [
            { path: 'mainPage', component: MainPageComponent },
            { path: '', redirectTo: 'mainPage', pathMatch: 'full', },
            {
                path: '**',
                component: MainPageComponent,
            },
        ],
    },
];

export const exportedRoutes = routes;


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }