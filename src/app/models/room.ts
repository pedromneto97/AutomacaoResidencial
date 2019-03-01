import {RoomType} from './room-type.enum';
import {Sensor} from './sensor';

export class Room {
  private _name: string;

  get name(): string {
    return this._name;
  }

  private _type: RoomType;

  get type(): RoomType {
    return this._type;
  }

  private _sensors: Sensor[];

  get sensors(): Sensor[] {
    return this._sensors;
  }
}
