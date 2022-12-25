import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from 'src/app/containers/breadcrumbs/breadcrumbs.service';
import { MenuItem, SidebarService } from 'src/app/containers/layout/sidebar/sidebar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})

export class StatisticComponent {
  background: ThemePalette = 'primary';
  childRouteActive = false;

  menuItem: MenuItem[] = [
    {
      label: 'Procument',
      url: 'procument',
      icon: 'shopping_cart'
    },
    {
      label: 'Project',
      url: 'project',
      icon: 'insert_chart'
    }
  ];

  constructor(
    private breadcrumbService: BreadcrumbsService,
    private sidebarService: SidebarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSidebar(this.menuItem);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route corresponds to the parent component
        if (event.url === '/parent') {
          // Re-initialize the parent component
          this.reInit();
        }
      }
    });
  }

  ngOnInit() {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSidebar(this.menuItem);

    this.route.params.subscribe(params => {
      if (params['fromChild']) {
        this.breadcrumbService.generateBreadcrumbs(this.route);
    
        this.route.children.forEach(childRoute => {
          if (childRoute.outlet === 'primary') {
            this.childRouteActive = true;
          }
        });
    
        console.log(this.childRouteActive);
      }
    });
  }

  ngOnDestroy() {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSidebar(this.menuItem);
  }

  reInit(){
    this.breadcrumbService.generateBreadcrumbs(this.route);
    
    this.route.children.forEach(childRoute => {
      if (childRoute.outlet === 'primary') {
        this.childRouteActive = true;
      }
    });

    console.log(this.childRouteActive);
  }
}
