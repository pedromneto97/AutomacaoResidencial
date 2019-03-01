import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {BedroomComponent} from './bedroom/bedroom.component';
import {TemperatureComponent} from './modulos/temperature/temperature.component';
import {LuminosidadeComponent} from './modulos/luminosidade/luminosidade.component';
import {far} from '@fortawesome/free-regular-svg-icons';
import {HumidityComponent} from './modulos/humidity/humidity.component';
import {PresencaComponent} from './modulos/presenca/presenca.component';
import {DoorComponent} from './modulos/door/door.component';
import {CrossbarService} from './services/crossbar.service';
import {TooltipModule} from 'ngx-bootstrap';
import {RoomComponent} from './room/room.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'bedroom',
    component: BedroomComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    BedroomComponent,
    TemperatureComponent,
    LuminosidadeComponent,
    HumidityComponent,
    PresencaComponent,
    DoorComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    TooltipModule.forRoot(),
  ],
  providers: [CrossbarService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
