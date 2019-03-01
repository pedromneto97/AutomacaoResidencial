import {SensorType} from './sensor-type.enum';

export class Sensor {
  private _type: SensorType;

  constructor(type: SensorType) {
    this._type = type;
  }

  get type() {
    return this._type;
  }
}
