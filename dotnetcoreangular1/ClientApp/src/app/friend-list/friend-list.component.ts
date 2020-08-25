import { Component } from '@angular/core';
import { UserModel } from '../users-list/users-list.component';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent{
  selectedUser$: Observable<UserModel>;

  constructor(userData: UserDataService) {
    this.selectedUser$ = userData.selectedUser$;
  }
}
