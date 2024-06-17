import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{
  public items?: MenuItem[];

  constructor(private router: Router) {
  }
  ngOnInit(){
    this.items =  this.items = [
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas', icon: 'pi pi-alaign-left', routerLink: '/'
          },
          {
            label: 'Números', icon: 'pi pi-dollar', routerLink: '/numbers'
          },
          {
            label: 'No comunies', icon: 'pi pi-globe', routerLink: '/uncommon'
          }
        ]
      },
      {label: 'Pipes otras', icon:'pi pi-desktop',
        items:[
      {
        label: 'Pipes personalizados', icon: 'pi pi-cog'
      },
      {
        label: 'Otro elemento', icon: 'pi pi-cog'
      }
        ]
  }
    ]
  }
}
