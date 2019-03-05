import {Patterns} from './patterns';

export class SensorType {
  constructor(type: SensorType, patterns: Patterns[]) {
    this._type = type;
    this._patterns = patterns;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _type: SensorType;

  get type(): SensorType {
    return this._type;
  }

  private _patterns: Patterns[];

  get patterns(): Patterns[] {
    return this._patterns;
  }
}
