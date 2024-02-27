import { NgModule } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { MainHeaderComponent } from './shared/main-header/main-header.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-us',
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./page/about-us/about-us.component').then(
                (c) => c.AboutUsComponent
            ),
    },
];
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        MainFooterComponent,
        MainHeaderComponent,
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}
