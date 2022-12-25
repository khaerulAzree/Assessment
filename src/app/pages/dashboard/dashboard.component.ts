import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from 'src/app/containers/breadcrumbs/breadcrumbs.service';
import { MenuItem, SidebarService } from 'src/app/containers/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  menuItem: MenuItem[] = [
    {
      label:'Dashboard',
      url:'dashboard',
      icon:'dashboard'
    },
  ];

  constructor(
    private breadcrumbService: BreadcrumbsService,
    private sidebarService: SidebarService,
    private route: ActivatedRoute
  ) {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSidebar(this.menuItem);
  }
  
  ngOnInit() {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSidebar(this.menuItem);
  }
  
  ngOnDestroy() {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSidebar(this.menuItem);
  }
}
