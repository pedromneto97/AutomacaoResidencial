import {Component, OnInit} from '@angular/core';
import {Temperature} from '../models/temperature';
import {faTemperatureHigh, faTemperatureLow, faThermometerEmpty} from '@fortawesome/free-solid-svg-icons';
import {Timestamp} from 'rxjs';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  public last_update: Date;

  constructor() {
    this.last_update = new Date();
  }

  ngOnInit() {
  }

}
