import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MoiveDetailsComponent } from './moive-details/moive-details.component';
import { DropdownModule } from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import {ListboxModule} from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    MultiSelectModule,
    AppRoutingModule,
    DropdownModule,
    ListboxModule,
    DialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MoiveDetailsComponent
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
