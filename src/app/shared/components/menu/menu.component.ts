import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
items?: MenuItem[]

ngOnInit(){
  this.items = [
    {label: 'New', icon:'pi pi-fw pi-plus'},
    {label: 'Open', icon :'pi pi-fw pi-download'},
    {label: 'Undo', icon: 'pi pi-fwpi-refresh'}
  ]
}

}
