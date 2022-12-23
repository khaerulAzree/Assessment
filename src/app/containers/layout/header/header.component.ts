import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  currentLink: string | null;

  background: ThemePalette = 'primary';
  links = ['','Fleet', 'Work', 'Statistics'];
  linkRootRoute = ['dashboard','fleet', 'work', 'statistics'];
  linkToRoute = ['','fleet', 'work', 'statistics/procument/research'];
  activeLink = this.links[0];

  constructor(
    private router: Router
  ){
    this.currentLink = this.router.url;

    var linkArray = this.currentLink.split(`/`);

    var rootRoute;

    if(linkArray.length > 1){
      rootRoute = this.linkRootRoute.indexOf(linkArray[1]);
      this.activeLink = this.links[rootRoute];
    }
  }

  ngOnInit(){}

  goTo(link: number) {
    this.router.navigate([`/${this.linkToRoute[link]}`]);
  }

  goToHome() {
    this.router.navigate([`/`]);
  }

}
