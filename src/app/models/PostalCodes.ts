export class PostalCodes {
  constructor(postal_code: string, province: string, country: string) {
    this._postal_code = postal_code;
    this._province = province;
    this._country = country;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _postal_code: string;

  get postal_code(): string {
    return this._postal_code;
  }

  private _province: string;

  get province(): string {
    return this._province;
  }

  private _country: string;

  get country(): string {
    return this._country;
  }
}
