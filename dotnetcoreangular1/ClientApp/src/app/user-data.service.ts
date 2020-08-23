import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './users-list/users-list.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly _users = new BehaviorSubject<UserModel[]>([]);
  private readonly _selectedUser = new BehaviorSubject<UserModel>(null);
  private readonly _http = new HttpClient(null);

  constructor(http: HttpClient) {
    this._http = http;
    this.getDataFromServer();
  }


  readonly users$ = this._users.asObservable();

  get Users(): UserModel[] {
    return this._users.getValue();
  }
  set Users(val: UserModel[]) {
    this._users.next(val);
  }

  selectedUserId: string;

  setSelectedUserId(id: string) {
    this.selectedUserId = id;
    this.loadSelectedUserIdFromLocalDb();
  }

  loadSelectedUserIdFromLocalDb() {
    var tempId = this.selectedUserId;
    if (tempId != "" && this.Users.length > 0) {
      var u = this.Users.filter(user => user._id == tempId)[0];
      this.selectedUser = u;
    }
  }

  readonly selectedUser$ = this._selectedUser.asObservable();

  get selectedUser(): UserModel {
    return this._selectedUser.getValue();
  }
  set selectedUser(val: UserModel) {
    this._selectedUser.next(val);
  }

  getDataFromServer() {
    this._http.get<UserModel[]>('https://api.mocki.io/v1/9e133cad').subscribe(result => {
      this.Users = result;
      this.loadSelectedUserIdFromLocalDb();
    }, error => console.error(error));
  }

}