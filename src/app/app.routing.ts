import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


