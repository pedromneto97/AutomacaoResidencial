import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from './room/room.component';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'room',
        component: RoomComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
