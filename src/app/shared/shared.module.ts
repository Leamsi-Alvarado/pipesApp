import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserAnimationsModule
  ],
  exports: [
    MenuComponent,
    MenuBarComponent
  ]
})
export class SharedModule { }
