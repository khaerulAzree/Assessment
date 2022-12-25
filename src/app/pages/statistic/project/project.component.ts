import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb, BreadcrumbsService } from 'src/app/containers/breadcrumbs/breadcrumbs.service';
import { MenuItem, SidebarService } from 'src/app/containers/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit, OnDestroy {
  title: string = "";
  
  menuItem: MenuItem[] = [
    {
      label:'Project',
      url:'list',
      icon:'insert_chart'
    }
  ];

  constructor(
    private breadcrumbService: BreadcrumbsService,
    private sidebarService: SidebarService,
    private route: ActivatedRoute
  ) {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSubSidebar(this.route, this.menuItem);
  }

  ngOnInit() {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSubSidebar(this.route, this.menuItem);
  }

  ngOnDestroy(){
    
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSubSidebar(this.route, this.menuItem);
  }

}
