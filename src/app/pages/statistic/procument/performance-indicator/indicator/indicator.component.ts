import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from 'src/app/containers/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent {
  indicator: string;

  constructor(
    private breadcrumbService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {
    this.breadcrumbService.generateBreadcrumbs(this.route);

    this.indicator = this.route.snapshot.params['chart'].trim();
  }
}
