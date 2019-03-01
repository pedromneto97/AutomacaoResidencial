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
    presence = new Sensor(SensorType.presence);
    luminosity = new Sensor(SensorType.luminosity);
    temperature = new Sensor(SensorType.temperature);
    humidity = new Sensor(SensorType.humidity);
    const rooms: Room[] = [];
    let kitchen, bedroom: RoomType;
    kitchen = new RoomType(RoomTypeEnum.kitchen, 'cookie-bite');
    bedroom = new RoomType(RoomTypeEnum.bedroom, 'bed');
    rooms.push(new Room('Cozinha', kitchen, [presence, humidity, temperature]));
    rooms.push(new Room('Quarto do Pedro', bedroom, [luminosity, presence, temperature, humidity]));
    this.residence = new Residence('Apartamento Pedro', 'pedro_apt', ResidenceType.apartment, rooms);
  }

  ngOnInit() {
  }

}
