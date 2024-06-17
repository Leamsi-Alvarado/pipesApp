import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";

//Configuracion del locale de la app
import localeEsMX from '@angular/common/locales/es-MX'
import localeFrBF from '@angular/common/locales/fr-BF'
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeEsMX)
registerLocaleData(localeFrBF)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
