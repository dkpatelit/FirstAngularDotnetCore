import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListComponent } from './friend-list.component';
import { UserDataService } from '../user-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('FriendListComponent', () => {
  let component: FriendListComponent;
  let fixture: ComponentFixture<FriendListComponent>;
  let userDataService: UserDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FriendListComponent],
      providers: [UserDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendListComponent);
    component = fixture.componentInstance;
    userDataService = TestBed.get(UserDataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
