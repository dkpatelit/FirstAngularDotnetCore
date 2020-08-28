import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  let service: UserDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [UserDataService] });

    service = TestBed.get(UserDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {

    const dummyUsers = [{ "_id": "5f31005f35c0d73ceea44afb", "guid": "2edaa754-e431-4243-b5d8-b208c13c2dd9", "name": "Woodward Knowles", "tags": ["ea", "do", "duis", "velit", "duis", "enim", "esse"], "email": "woodwardknowles@paragonia.com", "phone": "+1 (839) 570-3006", "gender": "male", "address": "540 Butler Place, Osmond, Virginia, 6393", "company": "PARAGONIA", "friends": [{ "id": 5, "name": "Maryann Reilly" }, { "id": 1, "name": "Amie Clark" }] }, { "_id": "5f31005f2cc0fe33dd591820", "guid": "d50a41b8-61cf-45c3-a31b-4aa6e44e7c1a", "name": "Jeannie Powell", "tags": ["dolore", "deserunt", "ex", "veniam", "qui", "ullamco", "sit"], "email": "jeanniepowell@extremo.com", "phone": "+1 (860) 548-3370", "gender": "female", "address": "236 Richards Street, Drummond, Arkansas, 786", "company": "EXTREMO", "friends": [{ "id": 1, "name": "Katherine Fernandez" }, { "id": 2, "name": "Myrtle Vang" }] }];
    const req = httpMock.expectOne(`https://api.mocki.io/v1/ae798d02`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);

    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();

    expect(service.Users.length).toBe(2);
  });

  it('should set 2 users', () => {

    const dummyUsers = [{ "_id": "5f31005f35c0d73ceea44afb", "guid": "2edaa754-e431-4243-b5d8-b208c13c2dd9", "name": "Woodward Knowles", "tags": ["ea", "do", "duis", "velit", "duis", "enim", "esse"], "email": "woodwardknowles@paragonia.com", "phone": "+1 (839) 570-3006", "gender": "male", "address": "540 Butler Place, Osmond, Virginia, 6393", "company": "PARAGONIA", "friends": [{ "id": 5, "name": "Maryann Reilly" }, { "id": 1, "name": "Amie Clark" }] }, { "_id": "5f31005f2cc0fe33dd591820", "guid": "d50a41b8-61cf-45c3-a31b-4aa6e44e7c1a", "name": "Jeannie Powell", "tags": ["dolore", "deserunt", "ex", "veniam", "qui", "ullamco", "sit"], "email": "jeanniepowell@extremo.com", "phone": "+1 (860) 548-3370", "gender": "female", "address": "236 Richards Street, Drummond, Arkansas, 786", "company": "EXTREMO", "friends": [{ "id": 1, "name": "Katherine Fernandez" }, { "id": 2, "name": "Myrtle Vang" }] }];

    expect(service.Users.length).toBe(0);

    //expecting constructur's http call
    const req = httpMock.expectOne(`https://api.mocki.io/v1/ae798d02`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);

    service.getDataFromServer();

    //expecting call from getDataFromServer() mothod
    const req2 = httpMock.expectOne(`https://api.mocki.io/v1/ae798d02`);
    expect(req2.request.method).toBe("GET");
    req2.flush(dummyUsers);

    expect(service.Users.length).toBe(2);

  });

  it('should be 5f31005f35c0d73ceea44afb id', () => {

    const dummyUsers = [{ "_id": "5f31005f35c0d73ceea44afb", "guid": "2edaa754-e431-4243-b5d8-b208c13c2dd9", "name": "Woodward Knowles", "tags": ["ea", "do", "duis", "velit", "duis", "enim", "esse"], "email": "woodwardknowles@paragonia.com", "phone": "+1 (839) 570-3006", "gender": "male", "address": "540 Butler Place, Osmond, Virginia, 6393", "company": "PARAGONIA", "friends": [{ "id": 5, "name": "Maryann Reilly" }, { "id": 1, "name": "Amie Clark" }] }, { "_id": "5f31005f2cc0fe33dd591820", "guid": "d50a41b8-61cf-45c3-a31b-4aa6e44e7c1a", "name": "Jeannie Powell", "tags": ["dolore", "deserunt", "ex", "veniam", "qui", "ullamco", "sit"], "email": "jeanniepowell@extremo.com", "phone": "+1 (860) 548-3370", "gender": "female", "address": "236 Richards Street, Drummond, Arkansas, 786", "company": "EXTREMO", "friends": [{ "id": 1, "name": "Katherine Fernandez" }, { "id": 2, "name": "Myrtle Vang" }] }];

    expect(service.Users.length).toBe(0);

    //expecting constructur's http call
    const req = httpMock.expectOne(`https://api.mocki.io/v1/ae798d02`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);

    service.setSelectedUserId("5f31005f35c0d73ceea44afb");

    expect(service.selectedUser._id).toBe("5f31005f35c0d73ceea44afb");

  });

  it('should be 5f31005f2cc0fe33dd591820 id', () => {

    const dummyUsers = [{ "_id": "5f31005f35c0d73ceea44afb", "guid": "2edaa754-e431-4243-b5d8-b208c13c2dd9", "name": "Woodward Knowles", "tags": ["ea", "do", "duis", "velit", "duis", "enim", "esse"], "email": "woodwardknowles@paragonia.com", "phone": "+1 (839) 570-3006", "gender": "male", "address": "540 Butler Place, Osmond, Virginia, 6393", "company": "PARAGONIA", "friends": [{ "id": 5, "name": "Maryann Reilly" }, { "id": 1, "name": "Amie Clark" }] }, { "_id": "5f31005f2cc0fe33dd591820", "guid": "d50a41b8-61cf-45c3-a31b-4aa6e44e7c1a", "name": "Jeannie Powell", "tags": ["dolore", "deserunt", "ex", "veniam", "qui", "ullamco", "sit"], "email": "jeanniepowell@extremo.com", "phone": "+1 (860) 548-3370", "gender": "female", "address": "236 Richards Street, Drummond, Arkansas, 786", "company": "EXTREMO", "friends": [{ "id": 1, "name": "Katherine Fernandez" }, { "id": 2, "name": "Myrtle Vang" }] }];

    expect(service.Users.length).toBe(0);

    //expecting constructur's http call
    const req = httpMock.expectOne(`https://api.mocki.io/v1/ae798d02`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyUsers);

    service.setSelectedUserId("5f31005f2cc0fe33dd591820");

    expect(service.selectedUser._id).toBe("5f31005f2cc0fe33dd591820");
    expect(service.selectedUser._id).not.toBe("5f31005f35c0d73ceea44afb");

    service.setSelectedUserId("5f31005f35c0d73ceea44afb");

    expect(service.selectedUser._id).toBe("5f31005f35c0d73ceea44afb");
    expect(service.selectedUser._id).not.toBe("5f31005f2cc0fe33dd591820");

  });
});
