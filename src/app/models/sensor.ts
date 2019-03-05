import {SensorType} from './SensorType';

export class Sensor {
  constructor(id: string, type: SensorType, patter: number, name: string) {
    this._id = id;
    this._type = type;
    this._patter = patter;
    this._name = name;
  }

  private _type: SensorType;

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _type_id: string;

  get type_id(): string {
    return this._type_id;
  }

  private _patter: number;

  get patter(): number {
    return this._patter;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  get type(): SensorType {
    return this._type;
  }
}
