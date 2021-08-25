import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { ActorComponent } from '../../actor/actor.component';
import { TablesComponent } from '../../tables/tables.component';
import { GenreComponent } from '../../genre/genre.component';
import { InfoComponent } from '../../info/info.component';
import { MapsComponent } from '../../maps/maps.component';
import { AddComponent } from '../../add/add.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DropdownModule } from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ListboxModule} from 'primeng/listbox';
import { AddnewmovieService } from 'app/addnewmovie.service';
import { MultiSelectModule } from "primeng/multiselect";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    MultiSelectModule,
    PaginatorModule,
    AutoCompleteModule,
    ListboxModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    ActorComponent,
    TablesComponent,
    GenreComponent,
    InfoComponent,
    MapsComponent,
    AddComponent,
    UpgradeComponent,
    AddnewmovieService
    
  ]
})

export class AdminLayoutModule {}