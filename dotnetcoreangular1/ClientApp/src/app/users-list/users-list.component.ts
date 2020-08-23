import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public message: string;
  public Users: UserModel[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<UserModel[]>('https://api.mocki.io/v1/9e133cad').subscribe(result => {
      this.Users = result;
    }, error => console.error(error));
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
