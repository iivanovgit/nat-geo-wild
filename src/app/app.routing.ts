import { Routes, RouterModule } from '@angular/router';
import { PublicComponent, HomeComponent, WildcatComponent, WildcatsComponent } from './public';
import { AdminComponent, AdminGuard, AdminLoginComponent, AdminDashboardComponent } from './admin';
import { PrivateComponent, LoginComponent, LoginFormComponent, DashboardComponent, AuthGuard } from './private';

const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: '', component: HomeComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'wildcats',
                component: WildcatsComponent,
                data: {
                    title: 'Wild Cats |'
                }
            },
            {
                path: 'wildcats/:id',
                component: WildcatComponent,
                data: {
                    title: 'Wild Cats - Details |'
                }
            }
        ]
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: PrivateComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: {
                    title: 'Dashboard |'
                }
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [
            {
                path:'',
                component: LoginFormComponent
            }
        ],
        data: {
            title: 'Sign in |'
        }
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
        children: [
            {
                path: '',
                component: AdminDashboardComponent,
                data: {
                    title: 'Admin Dashboard |'
                }
            }
        ]
    },
    {
        path: 'admin-login',
        component: AdminLoginComponent,
        data: {
            title: 'Admin |'
        }
    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


