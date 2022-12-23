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
      title: 'Home'
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
        },
      },
      {
        path: 'fleet',
        component: FleetComponent,
        data: {
          title: 'Fleet',
        },
      },
      {
        path: 'work',
        component: WorkComponent,
        data: {
          title: 'Work',
        },
      },
      {
        path: 'statistics',
        component: StatisticComponent,
        data: {
          title: 'Statistic',
        },
        children: [
          {
            path: 'procument',
            component: ProcumentComponent,
            data: {
              title: 'Procument',
            },
            children: [
              {
                path: 'performanceIndicator',
                component: PerformanceIndicatorComponent,
                data: {
                  title: 'PerformanceIndicator',
                },
                children: [
                  {
                    path: 'indicator',
                    component: IndicatorComponent,
                    data: {
                      title: 'Indicator',
                    },
                  },
                  {
                    path: 'indicator/:chart',
                    component: IndicatorComponent,
                    data: {
                      title: 'Indicator'
                    }
                  }
                ]
              },
              {
                path: 'research',
                component: ResearchComponent,
                data: {
                  title: 'Research',
                },
              }
            ]
          },
          {
            path: 'project',
            component: ProjectComponent,
            data: {
              title: 'Project',
            },
          }
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
