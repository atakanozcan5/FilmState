import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { ActorComponent } from '../../actor/actor.component';
import { TablesComponent } from '../../tables/tables.component';
import { GenreComponent } from '../../genre/genre.component';
import { InfoComponent } from '../../info/info.component';
import { MapsComponent } from '../../maps/maps.component';
import { AddComponent } from '../../add/add.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'actor',           component: ActorComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'genre',     component: GenreComponent },
    { path: 'info/:id',          component: InfoComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'add',  component: AddComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
