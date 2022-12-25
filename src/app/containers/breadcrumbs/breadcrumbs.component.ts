import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Breadcrumb, BreadcrumbsService } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbsService.breadcrumbs$.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}