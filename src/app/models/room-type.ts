import {RoomTypeEnum} from './room-type.enum';

export class RoomType {
  constructor(name: RoomTypeEnum, icon: string) {
    this._name = name;
    this._icon = icon;
  }

  private _name: RoomTypeEnum;

  get name(): RoomTypeEnum {
    return this._name;
  }

  private _icon: string;

  get icon(): string {
    return this._icon;
  }
}
