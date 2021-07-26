import { Address, Company, ReqUser } from "./user/ReqResResponseUser";

export class User {

  static userJson(obj: ReqUser) {
    return new User(
      obj['id'],
      obj['name'],
      obj['username'],
      obj['email'],
      obj['address'],
      obj['phone'],
      obj['website'],
      obj['company']
    );
  }

  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public address: Address,
    public phone: string,
    public website: string,
    public company: Company

  ) { }

  get userNameAndEmail() {
    return `${this.username} / ${this.email}`;
  }
  get nameAndEmail() {
    return `${this.name} ${this.email}`;
  }
}
