import {SensorType} from './sensor-type.enum';

export class Sensor {
  private _type: SensorType;

  get type() {
    return this._type;
  }
}
