import { Routes, RouterModule } from '@angular/router';
import { MainSectionComponent } from './main-section';
import { AdminComponent } from './admin';
import { HomeComponent } from './main-section/home';
import { WildcatComponent, WildcatsComponent } from './main-section/wildcats';


const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        children: [
            {
                path: '', component: HomeComponent,
                data: {
                    title: 'Nat Geo Wild'
                }
            },
            {
                path: 'wildcats',
                component: WildcatsComponent,
                data: {
                    title: 'Wild Cats'
                }
            },
            {
                path: 'wildcats/:id',
                component: WildcatComponent,
                data: {
                    title: 'Wild Cats - Details'
                }
            }
        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        data: {
            title: 'Admin'
        },
        canActivate: []
    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


