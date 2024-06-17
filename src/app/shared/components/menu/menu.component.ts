import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items?: MenuItem[]

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas', icon: 'pi pi-alaign-left',
          },
          {
            label: 'Números', icon: 'pi pi-dollar'
          },
          {
            label: 'No comunies', icon: 'pi pi-globe'
          }
        ]
      },
      {
        label: 'Pipes personalizados', icon: 'pi pi-cog'
      },
      {
        label: 'Otro elemento', icon: 'pi pi-cog'
      }
    ]
  }

}
