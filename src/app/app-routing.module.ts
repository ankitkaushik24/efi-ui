import {NgModule} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main-routes').then(m => m.mainRoutes)
    }
];

@NgModule({
    providers: [provideRouter(routes)],
})
export class AppRoutingModule {
}
