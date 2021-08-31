import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'pe-7s-home', class: '' },
    { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Films Table',  icon:'pe-7s-film', class: '' },
    { path: '/genre', title: 'Genres',  icon:'pe-7s-next-2', class: '' },
    { path: '/info', title: 'Film Info',  icon:'pe-7s-safe', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/add', title: 'Add Film Details',  icon:'pe-7s-plus', class: 'active-pro' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
