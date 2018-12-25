import {Component, OnInit} from '@angular/core';
import {Temperature} from '../../models/temperature';
import {faTemperatureHigh, faTemperatureLow, faThermometerEmpty} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  public temperature: Temperature;
  public temp_icon;
  types = Temperature.types;

  constructor() {
    this.temperature = new Temperature(true, 0, Temperature.types.find(o => o.name === 'Celsius'));
    this.temp_icon = faThermometerEmpty;

    this.temp();
  }

  ngOnInit() {
  }

  temp() {
    if (this.temperature.temperature < 20) {
      this.temp_icon = faTemperatureLow;
    } else {
      this.temp_icon = faTemperatureHigh;
    }
  }

  tempFilter(value: string) {
    this.temperature.type = Temperature.types.find(o => o.name === value);
  }
}
