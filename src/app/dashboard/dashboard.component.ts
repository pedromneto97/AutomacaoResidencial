import {Component, OnInit} from '@angular/core';
import {Residence} from '../models/residence';
import {ResidenceType} from '../models/residence-type.enum';
import {Room} from '../models/room';
import {RoomTypeEnum} from '../models/room-type.enum';
import {Sensor} from '../models/sensor';
import {SensorType} from '../models/sensor-type.enum';
import {RoomType} from '../models/room-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private residence: Residence;

  constructor() {
    let presence, luminosity, humidity, temperature: Sensor;
    presence = new Sensor(SensorType.Presence);
    luminosity = new Sensor(SensorType.Luminosity);
    temperature = new Sensor(SensorType.Temperature);
    humidity = new Sensor(SensorType.Humidity);
    const rooms: Room[] = [];
    let kitchen, bedroom: RoomType;
    kitchen = new RoomType(RoomTypeEnum.Kitchen, 'cookie-bite');
    bedroom = new RoomType(RoomTypeEnum.Bedroom, 'bed');
    rooms.push(new Room('Cozinha', kitchen, [presence, humidity, temperature]));
    rooms.push(new Room('Quarto do Pedro', bedroom, [luminosity, presence, temperature, humidity]));
    this.residence = new Residence('Apartamento Pedro', 'pedro_apt', ResidenceType.Apartment, rooms);
  }

  ngOnInit() {
  }

}
