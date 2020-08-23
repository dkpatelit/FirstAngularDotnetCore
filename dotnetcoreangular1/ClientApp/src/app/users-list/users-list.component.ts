import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public message: string;
  public Users$: Observable<UserModel[]>;

  constructor(userData: UserDataService) {
    this.Users$ = userData.users$;
  }

  ngOnInit() {
    this.message = "User's List";
  }
}
export interface UserModel {
  _id: string;
  guid: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  company: string;
  friends: Friend[];
  tags: string[];
}

export interface Friend {
  id: number;
  name: string;
}
