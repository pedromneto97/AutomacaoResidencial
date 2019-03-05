export class Measurement {
  constructor(value: number, time: Date) {
    this._value = value;
    this._time = time;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _value: number;

  get value(): number {
    return this._value;
  }

  private _time: Date;

  get time(): Date {
    return this._time;
  }
}
