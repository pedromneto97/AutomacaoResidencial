import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TemperatureComponent} from './modulos/temperature/temperature.component';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {DoorComponent} from './modulos/door/door.component';
import {HumidityComponent} from './modulos/humidity/humidity.component';
import {LuminosidadeComponent} from './modulos/luminosidade/luminosidade.component';
import {PresencaComponent} from './modulos/presenca/presenca.component';
import {RoomComponent} from './room/room.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TooltipModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    DashboardComponent,
    TemperatureComponent,
    HomeComponent,
    DoorComponent,
    HumidityComponent,
    LuminosidadeComponent,
    PresencaComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    TooltipModule
  ]
})
export class PagesModule {
}
