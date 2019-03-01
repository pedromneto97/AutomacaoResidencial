import {Sensor} from './sensor';
import {RoomType} from './room-type';

export class Room {
  private _name: string;
  private _type: RoomType;
  private _sensors: Sensor[];

  constructor(name: string, type: RoomType, sensors: Sensor[]) {
    this._name = name;
    this._type = type;
    this._sensors = sensors;
  }

  get name(): string {
    return this._name;
  }

  get type(): RoomType {
    return this._type;
  }

  get sensors(): Sensor[] {
    return this._sensors;
  }
}
