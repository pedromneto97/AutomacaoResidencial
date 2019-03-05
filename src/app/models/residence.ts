import {Room} from './room';
import {ResidenceType} from './residence-type';
import {Address} from './address';
import {User} from './user';

export class Residence {
  private _residence: string;
  private _name: string;
  private _type: ResidenceType;
  private _rooms: Room[];

  constructor(residence: string, name: string, type: ResidenceType, rooms: Room[], address: Address, users: User[]) {
    this._residence = residence;
    this._name = name;
    this._type = type;
    this._rooms = rooms;
    this._address = address;
    this._users = users;
  }

  private _address: Address;

  get address(): Address {
    return this._address;
  }

  private _users: User[];

  get users(): User[] {
    return this._users;
  }

  get residence(): string {
    return this._residence;
  }

  get name(): string {
    return this._name;
  }

  get type(): ResidenceType {
    return this._type;
  }

  get rooms(): Room[] {
    return this._rooms;
  }
}
