import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public message: string;
  public gridMessage: string;
  public usersArray: UserModel[];
  public filteredUsers: UserModel[];
  public pageSize: number;
  public currentPage: number;
  public totalPages: number;
  public pageNumbersList: number[];
  public sortColumn: string;
  public sortOrder: boolean;

  constructor(private userDataService: UserDataService) {
    this.pageSize = 5;
    this.currentPage = 1;
    this.totalPages = 0;
    this.sortColumn = 'name';
    this.sortOrder = true;

    userDataService.users$.subscribe(data => this.reloadLocalArray(data));
  }

  reloadDataViaHttpRequest() {
    this.userDataService.getDataFromServer();
  }

  reloadLocalArray(data: UserModel[]) {
    this.totalPages = Math.ceil(data.length / this.pageSize);
    this.pageNumbersList = Array(this.totalPages).fill(0).map((x, i) => i + 1);
    this.usersArray = data;
    this.sortUsersArray();
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

    if (endNumber > this.usersArray.length) {
      endNumber = this.usersArray.length;
    }

    this.filteredUsers = this.usersArray.slice(startIndex, endNumber);
    this.gridMessage = "Showing " + (startIndex + 1) + " to " + endNumber + " of " + this.usersArray.length + " records.";
  }
  sortTable(columnName) {
    this.sortOrder = (this.sortColumn == columnName) ? !this.sortOrder : true;
    this.sortColumn = columnName;
    this.currentPage = 1;

    this.sortUsersArray();
    this.refreshGridData();
  }

  sortUsersArray() {
    this.usersArray.sort((a, b) => {
      var result = 1;
      if (this.sortColumn == 'tags')
        result = ((a.tags.length > b.tags.length) ? 1 : -1);
      else if (this.sortColumn == 'friends')
        result = ((a.friends.length > b.friends.length) ? 1 : -1);
      else if (this.sortColumn == 'company')
        result = ((a.company > b.company) ? 1 : -1);
      else if (this.sortColumn == 'phone')
        result = ((a.phone > b.phone) ? 1 : -1);
      else
        result = ((a.name > b.name) ? 1 : -1);

      return (this.sortOrder ? result : result * -1);
    });
  }

  ngOnInit() {
    this.message = "User's List";
  }
}
export interface UserModel {
  _id: string;
  guid: string;
  name: string;
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
