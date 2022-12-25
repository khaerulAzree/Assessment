
import { Injectable } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Subject } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  constructor(
  ) {
  }
  
  private breadcrumbsSubject = new Subject<Breadcrumb[]>();
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  private breadcrumbs: Breadcrumb[] = [];

  getBreadcrumbs(): Breadcrumb[] {
    return this.breadcrumbs;
  }

  generateBreadcrumbs(route: ActivatedRoute){
    this.breadcrumbs = [{ label: route.snapshot.data['title'], url: route.snapshot.routeConfig?.path || "" }];

    // Iterate through the parent routes and add them to the breadcrumb array
    let currentRoute = route.parent;
    while (currentRoute) {
      this.breadcrumbs.unshift({ label: currentRoute.snapshot.data['title'], url: currentRoute.snapshot.routeConfig?.path || "" });
      currentRoute = currentRoute.parent;
    }

    let index = 0;

    do {
      index = this.breadcrumbs.findIndex(obj => obj.url === '');
      this.breadcrumbs.splice(index, 1);
    } while (this.breadcrumbs[this.breadcrumbs.findIndex(obj => obj.url === '')] != undefined);

    var prevUrl = "";

    this.breadcrumbs.forEach(element => {
      element.url = prevUrl+"/"+element.url; 
      prevUrl = element.url; 
    });

    console.log(this.breadcrumbs);

    this.breadcrumbsSubject.next(this.breadcrumbs);
  }
}