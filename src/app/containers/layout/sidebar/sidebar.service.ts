import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

export interface MenuItem {
  label: string;
  url: string;
  icon: string;
  children?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  constructor() { }
  
  private titleSubject = new Subject<string>();
  title$ = this.titleSubject.asObservable();

  private menuItemSubject = new Subject<MenuItem[]>();
  menuItem$ = this.menuItemSubject.asObservable();

  private subMenuItemSubject = new Subject<MenuItem[]>();
  subMenuItem$ = this.subMenuItemSubject.asObservable();

  updateSidebar(menuList: MenuItem[]){
    this.menuItemSubject.next(menuList);
  }

  updateSubSidebar(route: ActivatedRoute, menuList: MenuItem[]){
    this.titleSubject.next(route.snapshot.data['title']);
    this.subMenuItemSubject.next(menuList);
  }
}
