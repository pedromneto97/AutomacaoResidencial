import {Component, OnInit} from '@angular/core';
import {faTint} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {

  public icon;
  public humidity: number;

  constructor() {
    this.icon = faTint;
    this.humidity = 70;
  }

  ngOnInit() {
  }

}
