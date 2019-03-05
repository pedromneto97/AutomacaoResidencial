export class User {
  constructor(name: string, cpf: string, username: string, password: string) {
    this._name = name;
    this._cpf = cpf;
    this._username = username;
    this._password = password;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  private _cpf: string;

  get cpf(): string {
    return this._cpf;
  }

  private _username: string;

  get username(): string {
    return this._username;
  }

  private _password: string;

  get password(): string {
    return this._password;
  }
}
