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
  public gridMessage: string;
  public Users$: Observable<UserModel[]>;
  public usersArray: UserModel[];
  public filteredUsers: UserModel[];
  public pageSize: number;
  public currentPage: number;
  public totalPages: number;
  public pageNumbersList: number[];

  constructor(userData: UserDataService) {
    this.pageSize = 5;
    this.currentPage = 2;
    this.totalPages = 0;
    this.Users$ = userData.users$;
    this.Users$.subscribe(data => this.reloadLocalArray(data));
  }

  reloadLocalArray(data: UserModel[]) {
    this.totalPages = Math.ceil(data.length / this.pageSize);
    this.pageNumbersList = Array(this.totalPages).fill(0).map((x, i) => i + 1);
    this.usersArray = data;

    this.refreshGridData();
  }

  setCurrentPage(e) {
    this.currentPage = e.target.value;
    this.refreshGridData();
  }

  setPageSize(e) {
    this.pageSize = e.target.value;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.usersArray.length / this.pageSize);
    this.pageNumbersList = Array(this.totalPages).fill(0).map((x, i) => i + 1);
    this.refreshGridData();
  }

  refreshGridData() {
    var startIndex = ((this.currentPage - 1) * this.pageSize);
    var endNumber = this.currentPage * this.pageSize;

    this.filteredUsers = this.usersArray.slice(startIndex, endNumber);

    if (endNumber > this.usersArray.length) {
      endNumber = this.usersArray.length;
    }

    this.gridMessage = "Showing " + (startIndex + 1) + " to " + endNumber + " of " + this.usersArray.length + " records.";
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
