import {TemperatureType} from './temperature-type';
import {forEach} from '@angular/router/src/utils/collection';

export class Temperature {
  static types = [new TemperatureType('Celsius', 'ºC'), new TemperatureType('Kelvin', 'K'), new TemperatureType('Fahrenheit', 'ºF')];

  active: boolean;
  private _temperature: number;
  private _type: TemperatureType;

  constructor(active: boolean, temperature: number, type: TemperatureType) {
    if (this.isValidType(type)) {
      this.active = active;
      this._temperature = temperature;
      this._type = type;
    } else {
      throw new Error('Invalid type');
    }
  }

  set temperature(value: number) {
    this._temperature = value;
  }

  get temperature(): number {
    return this._temperature;
  }

  get type(): TemperatureType {
    return this._type;
  }

  set type(type: TemperatureType) {
    if (this.isValidType(type)) {
      this._temperature = this.convertTemperature(this._temperature, this._type, type);
      this._type = type;
    } else {
      throw new Error('Invalid Type');
    }
  }

  public convertTemperature(temperature: number, actualType: TemperatureType, newType: TemperatureType): number {
    if (!this.isValidType(actualType) || !this.isValidType(newType)) {
      throw new Error('Invalid Type');
    }
    if (newType.name === 'Celsius') {
      if (actualType.name === 'Kelvin') {
        temperature -= 273.15;
      } else if (actualType.name === 'Fahrenheit') {
        temperature = (temperature - 32) * 5 / 9;
      }
    } else if (newType.name === 'Kelvin') {
      if (actualType.name === 'Fahrenheit') {
        temperature = ((temperature - 32) * 5 / 9) + 273.15;
      } else if (actualType.name === 'Celsius') {
        temperature += 273.15;
      }
    } else if (newType.name === 'Fahrenheit') {
      if (actualType.name === 'Celsius') {
        temperature = (temperature * 9 / 5) + 32;
      } else if (actualType.name === 'Kelvin') {
        temperature = ((temperature - 273.15) * 9 / 5) + 32;
      }
    }
    return temperature;
  }

  private isValidType(type: TemperatureType): boolean {

    if (Temperature.types.find(o => o === type)) {
      return true;
    } else {
      return false;
    }
  }
}
