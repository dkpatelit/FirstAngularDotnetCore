import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { UserDataService } from '../user-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { SortHelperComponent } from '../sort-helper/sort-helper.component';


describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let userDataService: UserDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent, SortHelperComponent],
      providers: [UserDataService],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule] //add the router module here as well
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    userDataService = TestBed.get(UserDataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
