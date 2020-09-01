import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel, StudentModel } from './users-list/users-list.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly _users = new BehaviorSubject<UserModel[]>([]);
  private readonly _selectedUser = new BehaviorSubject<UserModel>(null);

  constructor(private http: HttpClient) {
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
    this.http.get<UserModel[]>('https://api.mocki.io/v1/ae798d02').subscribe(result => {
      this.Users = result;
      this.loadSelectedUserIdFromLocalDb();
    }, error => console.error(error));
  }

  postStudentData(student: StudentModel) {
    this.http.post('https://localhost:44363/api/student', student).subscribe(
      (response) => { },
      (error) => { console.log(error) }
    )
  }
  //https://api.mocki.io/v1/9e133cad
  //https://api.mocki.io/v1/ae798d02
}
