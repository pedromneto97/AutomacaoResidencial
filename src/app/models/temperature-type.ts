export class TemperatureType {
  private _name;
  private _abr;

  get name() {
    return this._name;
  }

  get abr() {
    return this._abr;
  }

  constructor(name, abr) {
    this._name = name;
    this._abr = abr;
  }
}
