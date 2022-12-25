import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './containers';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { IndicatorComponent } from './pages/statistic/procument/performance-indicator/indicator/indicator.component';
import { PerformanceIndicatorComponent } from './pages/statistic/procument/performance-indicator/performance-indicator.component';
import { ProcumentComponent } from './pages/statistic/procument/procument.component';
import { ResearchComponent } from './pages/statistic/procument/research/research.component';
import { ProjectComponent } from './pages/statistic/project/project.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home',
      breadcrumbs: 'Dashboard',
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          breadcrumbs: 'Dashboard',
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'fleet',
        component: FleetComponent,
        data: {
          title: 'Fleet',
          breadcrumbs: 'Fleet',
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'work',
        component: WorkComponent,
        data: {
          title: 'Work',
          breadcrumbs: 'Work',
        },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'statistics',
        component: StatisticComponent,
        data: {
          title: 'Statistic',
          breadcrumbs: 'Statistic',
        },
        children: [
          {
            path: 'procument',
            component: ProcumentComponent,
            data: {
              title: 'Procument',
              breadcrumbs: 'Procument',
            },
            runGuardsAndResolvers: 'always',
            children: [
              {
                path: 'performance-indicator',
                component: PerformanceIndicatorComponent,
                data: {
                  title: 'Performance Indicator',
                  breadcrumbs: 'Performance Indicator',
                },
                children: [
                  {
                    path: 'indicator',
                    component: IndicatorComponent,
                    data: {
                      title: 'Indicator',
                      breadcrumbs: 'Indicator',
                    },
                    runGuardsAndResolvers: 'always',
                  },
                  {
                    path: 'indicator/:chart',
                    component: IndicatorComponent,
                    data: {
                      title: 'Indicator',
                      breadcrumbs: 'Indicator'
                    },
                    runGuardsAndResolvers: 'always',
                  }
                ],
                runGuardsAndResolvers: 'always',
              },
              {
                path: 'research',
                component: ResearchComponent,
                data: {
                  title: 'Research',
                  breadcrumbs: 'Research',
                },
                runGuardsAndResolvers: 'always',
              }
            ]
          },
          {
            path: 'project',
            component: ProjectComponent,
            data: {
              title: 'Project',
              breadcrumbs: 'Project',
            },
            runGuardsAndResolvers: 'always',
          }
        ],
        runGuardsAndResolvers: 'always',
      }
    ],
    runGuardsAndResolvers: 'always',
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
