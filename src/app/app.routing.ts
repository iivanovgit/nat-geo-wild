import { Routes, RouterModule } from '@angular/router';
import { MainSectionComponent } from './main-section';
import { AdminComponent } from './admin';
import { HomeComponent } from './main-section/home';
import { WildcatComponent, WildcatsComponent } from './main-section/wildcats';


const appRoutes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // {
    //     path: '',
    //     component: MainSectionComponent,
    //     children: [
    //         { path: 'home', component: HomeComponent },
    //         { path: 'wildcats', component: WildcatsComponent },
    //         { path: 'wildcats/:id', component: WildcatComponent }
    //     ]
    // },
    { path: '', component: HomeComponent },
    { path: 'wildcats', component: WildcatsComponent },
    { path: 'wildcats/:id', component: WildcatComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


