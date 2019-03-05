export class ResidenceType {
  constructor(type: string) {
    this._type = type;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }
}
