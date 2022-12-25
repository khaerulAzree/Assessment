import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [];

  constructor(
    private SidebarService: SidebarService
  ) {
    this.SidebarService.menuItem$.subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
}
