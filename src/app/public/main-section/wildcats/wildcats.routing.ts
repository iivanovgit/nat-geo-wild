import { Routes, RouterModule } from '@angular/router';

import { WildcatsComponent } from './wildcats.component';
import { WildcatComponent } from './wildcat.component';

const wildcatsRoutes: Routes = [
    { path: 'wildcats', component: WildcatsComponent },
    { path: 'wildcats/:id', component: WildcatComponent }
];

export const wildcatsRouting = RouterModule.forChild(wildcatsRoutes);
