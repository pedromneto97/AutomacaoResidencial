import {SensorType} from './SensorType';
import {RoomType} from './room-type';

export class Room {
  private _name: string;
  private _type: RoomType;

  constructor(name: string, type: RoomType, sensors: SensorType[], icon: string) {
    this._name = name;
    this._type = type;
    this._sensors = sensors;
    this._icon = icon;
  }

  private _sensors: SensorType[];

  get sensors(): SensorType[] {
    return this._sensors;
  }

  get name(): string {
    return this._name;
  }

  get type(): RoomType {
    return this._type;
  }

  private _icon: string;

  get icon(): string {
    return this._icon;
  }
}
