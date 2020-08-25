import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { UserModel } from '../users-list/users-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  id: string;
  selectedUser: UserModel;

  private readonly _userDataService = null;
  private sub: any;

  constructor(private route: ActivatedRoute, userData: UserDataService) {
    userData.selectedUser$.subscribe(data => this.selectedUser = data);
    this._userDataService = userData;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this._userDataService.setSelectedUserId(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

