import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from 'src/app/containers/breadcrumbs/breadcrumbs.service';
import { MenuItem, SidebarService } from 'src/app/containers/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent {
  menuItem: MenuItem[] = [
    {
      label:'Fleet',
      url:'fleet',
      icon:'directions_boat'
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
