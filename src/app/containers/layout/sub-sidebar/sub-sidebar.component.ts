import { Component } from '@angular/core';
import { MenuItem, SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-sub-sidebar',
  templateUrl: './sub-sidebar.component.html',
  styleUrls: ['./sub-sidebar.component.scss']
})
export class SubSidebarComponent {
  title: string = "";
  menuItems: MenuItem[] = [];

  constructor(
    private SidebarService: SidebarService
  ) {
    this.SidebarService.title$.subscribe(title => {
      this.title = title;
    });
    
    this.SidebarService.subMenuItem$.subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
}
