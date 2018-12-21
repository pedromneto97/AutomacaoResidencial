import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBed, faCookieBite, faHome, faTemperatureHigh, faTemperatureLow, faThermometerEmpty} from '@fortawesome/free-solid-svg-icons';
import {BedroomComponent} from './bedroom/bedroom.component';
import {TemperatureComponent} from './modulos/temperature/temperature.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faHome, faBed, faCookieBite, faTemperatureLow, faTemperatureHigh, faThermometerEmpty);
  }
}
