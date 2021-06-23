import { Injectable } from '@angular/core';

export type User = {
  id: number;
  name: string;
  address: string;
};

@Injectable()
export class AppService {
  constructor() {}

  public users: User[] = [{ id: 1, name: 'Gopi', address: 'home address' }];
  public count = 2;

  public getUser(id) {
    const index = this.users.map(x => x.id).indexOf(id);
    //console.log(index);
    if (index != -1) {
      return { ...this.users[index] };
    } else {
      return { id: 0, name: '', address: '' };
    }
  }

  public addUser(user) {
    this.users.push({ ...user, id: this.count++ });
  }

  public deleteUser(id: number) {
    this.users = this.users.filter(x => x.id !== id);
  }

  public updateUser(data) {
    const index = this.users.map(x => x.id).indexOf(data.id);
    //console.log(data)
    if (index !== -1) {
      this.users[index] = data;
    }
  }
}
