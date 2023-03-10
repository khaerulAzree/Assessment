import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import {
  HeaderComponent,
  LayoutComponent,
  BodyComponent,
  SidebarComponent,
  BreadcrumbsComponent,
  SubSidebarComponent,
} from './containers';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FleetComponent } from './pages/fleet/fleet.component';
import { ProcumentComponent } from './pages/statistic/procument/procument.component';
import { PerformanceIndicatorComponent } from './pages/statistic/procument/performance-indicator/performance-indicator.component';
import { ResearchComponent } from './pages/statistic/procument/research/research.component';
import { WorkComponent } from './pages/work/work.component';
import { IndicatorComponent } from './pages/statistic/procument/performance-indicator/indicator/indicator.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ProjectComponent } from './pages/statistic/project/project.component';


const APP_CONTAINERS = [
  HeaderComponent,
  LayoutComponent,
  BodyComponent,
  SidebarComponent,
  SubSidebarComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    FleetComponent,
    ProcumentComponent,
    PerformanceIndicatorComponent,
    IndicatorComponent,
    ResearchComponent,
    WorkComponent,
    DashboardComponent,
    StatisticComponent,
    ProjectComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
