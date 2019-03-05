import {PostalCodes} from './PostalCodes';

export class Address {
  private _postal_id: string;

  constructor(postal_code: PostalCodes, district: string, street: string, number: number, complement: string) {
    this._postal_code = postal_code;
    this._district = district;
    this._street = street;
    this._number = number;
    this._complement = complement;
  }

  private _postal_code: PostalCodes;

  get postal_code(): PostalCodes {
    return this._postal_code;
  }

  private _district: string;

  get district(): string {
    return this._district;
  }

  private _street: string;

  get street(): string {
    return this._street;
  }

  private _number: number;

  get number(): number {
    return this._number;
  }

  private _complement: string;

  get complement(): string {
    return this._complement;
  }
}
