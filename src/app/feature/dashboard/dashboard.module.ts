import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
// import { HeaderComponent } from 'src/app/header/header.component';
import { BreadcrumbComponent } from 'src/app/header/breadcrumb/breadcrumb.component';
import { HomeComponent } from 'src/app/feature/dashboard/home/home.component';
import { LiveClassesComponent } from 'src/app/feature/live-classes/live-classes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    // SidebarComponent,
    // HeaderComponent,
    BreadcrumbComponent,
    HomeComponent,
    LiveClassesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
