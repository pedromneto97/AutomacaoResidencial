export class RoomType {
  constructor(name: string) {
    this._name = name;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }
}
