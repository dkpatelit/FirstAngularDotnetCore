import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

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
  let httpMock: HttpTestingController;


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
    httpMock = TestBed.get(HttpTestingController);

    fixture.detectChanges();
  });

  beforeEach(() => {
    const dummyUsers = [{ "_id": "5f31005f35c0d73ceea44afb", "guid": "2edaa754-e431-4243-b5d8-b208c13c2dd9", "name": "Woodward Knowles", "tags": ["ea", "do", "duis", "velit", "duis", "enim", "esse"], "email": "woodwardknowles@paragonia.com", "phone": "+1 (839) 570-3006", "gender": "male", "address": "540 Butler Place, Osmond, Virginia, 6393", "company": "PARAGONIA", "friends": [{ "id": 5, "name": "Maryann Reilly" }, { "id": 1, "name": "Amie Clark" }] }, { "_id": "5f31005f2cc0fe33dd591820", "guid": "d50a41b8-61cf-45c3-a31b-4aa6e44e7c1a", "name": "Jeannie Powell", "tags": ["dolore", "deserunt", "ex", "veniam", "qui", "ullamco", "sit"], "email": "jeanniepowell@extremo.com", "phone": "+1 (860) 548-3370", "gender": "female", "address": "236 Richards Street, Drummond, Arkansas, 786", "company": "EXTREMO", "friends": [{ "id": 1, "name": "Katherine Fernandez" }, { "id": 2, "name": "Myrtle Vang" }] }];
    const req = httpMock.expectOne(`https://api.mocki.io/v1/ae798d02`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should injected', () => {
    inject([userDataService], (injectService: UserDataService) => {
      expect(injectService).toBe(userDataService);
    });
  });

  it('should be 2 records', () => {
    expect(component.filteredUsers.length).toBe(2);
  });

  it('should be 2 pages', () => {
    component.setPageSize({ target: { value: 1 }});
    expect(component.totalPages).toBe(2);
  });

  it('should be 1 pages', () => {
    component.setPageSize({ target: { value: 10 } });
    expect(component.totalPages).toBe(1);
  });

  it('should sort from column "Name"', () => {
    component.sortTable("name");
    expect(component.filteredUsers[0]._id).toBe("5f31005f35c0d73ceea44afb");

    component.sortTable("name");
    expect(component.filteredUsers[0]._id).toBe("5f31005f2cc0fe33dd591820");
  });

});
