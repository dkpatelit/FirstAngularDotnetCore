import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserDataService } from '../user-data.service';
import { FriendListComponent } from '../friend-list/friend-list.component';
import { TagListComponent } from '../tag-list/tag-list.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let userDataService: UserDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent, FriendListComponent, TagListComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule] //add the router module here as well
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    userDataService = TestBed.get(UserDataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
