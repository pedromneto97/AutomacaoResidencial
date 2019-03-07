import {Component, OnInit} from '@angular/core';
import {Residence} from '../../models/residence';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private residence: Residence;

  constructor() {

  }

  ngOnInit() {
  }

}
