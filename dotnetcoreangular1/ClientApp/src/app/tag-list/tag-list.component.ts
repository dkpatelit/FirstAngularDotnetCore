import { Component } from '@angular/core';
import { UserModel } from '../users-list/users-list.component';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent {
  selectedUser$: Observable<UserModel>;

  constructor(userData: UserDataService) {
    this.selectedUser$ = userData.selectedUser$;
  }
}
