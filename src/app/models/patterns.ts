export class Patterns {
  constructor(unit: string, name: string) {
    this._unit = unit;
    this._name = name;
  }

  private _unit: string;

  get unit(): string {
    return this._unit;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }
}
