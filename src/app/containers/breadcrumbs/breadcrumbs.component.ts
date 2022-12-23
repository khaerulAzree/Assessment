import { Component } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Params, PRIMARY_OUTLET, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, distinctUntilChanged, filter, map, tap } from 'rxjs';

interface BreadcrumbInterface {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent {
  
  public breadcrumbs: BreadcrumbInterface[];

  showSpinnerSubject$ = new BehaviorSubject<boolean>(false);

  showSpinnerAction$ = this.showSpinnerSubject$.asObservable();
  navigationEvent = this.router.events;

  navigationEventEnd = this.navigationEvent.pipe(
    filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel),
    tap(() => this.showSpinnerSubject$.next(false)),
    tap(() => { this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root); })
  );

  navigationEventStart = this.navigationEvent.pipe(
    filter(event => event instanceof NavigationStart),
    tap(() => this.showSpinnerSubject$.next(true)),
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    // this.breadcrumbs = this.getBreadcrumbs(this.router.routerState.root);
    this.navigationEventStart.subscribe();
    this.navigationEventEnd.subscribe();

    console.log(this.breadcrumbs);
  }

  private getBreadcrumbs(
    route: ActivatedRoute, url: string = '',
    breadcrumbs: BreadcrumbInterface[] = []): BreadcrumbInterface[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      url += `/${routeURL}`;

      const breadcrumb: BreadcrumbInterface = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };
      if (breadcrumb.label) {
        breadcrumbs.push(breadcrumb);
      }
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return [];
  }

  backClicked() {
    this.location.back();
  }
}
