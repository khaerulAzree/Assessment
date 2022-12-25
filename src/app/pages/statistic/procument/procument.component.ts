import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb, BreadcrumbsService } from 'src/app/containers/breadcrumbs/breadcrumbs.service';
import { MenuItem, SidebarService } from 'src/app/containers/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-procument',
  templateUrl: './procument.component.html',
  styleUrls: ['./procument.component.scss']
})
export class ProcumentComponent {
  title: string;
  
  menuItem: MenuItem[] = [
    {
      label:'PI',
      url:'performance-indicator',
      icon:'insert_chart',
      children:[
        {
          label:'Chart 1',
          url:'performance-indicator/indicator/1',
          icon:'',
        },
        {
          label:'Chart 2',
          url:'performance-indicator/indicator/2',
          icon:'',
        },
      ]
    },
    {
      label:'Research',
      url:'research',
      icon:'insert_chart'
    }
  ];

  constructor(
    private breadcrumbService: BreadcrumbsService,
    private sidebarService: SidebarService,
    private route: ActivatedRoute
  ) {
    this.title = this.route.snapshot.data['title'];
    
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSubSidebar(this.route, this.menuItem);
  }

  ngOnInit() {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.sidebarService.updateSubSidebar(this.route, this.menuItem);
  }
}
