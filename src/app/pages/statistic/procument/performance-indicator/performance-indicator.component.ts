import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from 'src/app/containers/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-performance-indicator',
  templateUrl: './performance-indicator.component.html',
  styleUrls: ['./performance-indicator.component.scss']
})
export class PerformanceIndicatorComponent {

  constructor(
    private breadcrumbService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {
    this.breadcrumbService.generateBreadcrumbs(this.route);
  }
}
