import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './main-section/home';
import { WildcatComponent, WildcatsComponent } from './main-section/wildcats';
import { AdminComponent, AuthGuard, UnauthGuard, AdminLoginComponent, AdminDashboardComponent } from './admin';


const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: ClientComponent,
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
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: AdminDashboardComponent,
                data: {
                    title: 'Admin Dashboard'
                }
            }
        ]
    },
    {
        path: 'admin-login',
        component: AdminLoginComponent,
        canActivate: [UnauthGuard]
    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


