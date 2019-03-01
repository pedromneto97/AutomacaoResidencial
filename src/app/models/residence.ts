import {ResidenceType} from './residence-type.enum';
import {Room} from './room';

export class Residence {
  constructor(residence: string, name: string, type: ResidenceType, rooms: Room[]) {
    this._residence = residence;
    this._name = name;
    this._type = type;
    this._rooms = rooms;
  }

  private _residence: string;

  get residence(): string {
    return this._residence;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _type: ResidenceType;

  get type(): ResidenceType {
    return this._type;
  }

  private _rooms: Room[];

  get rooms(): Room[] {
    return this._rooms;
  }
}
