import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListComponent } from './tag-list.component';
import { UserDataService } from '../user-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('TagListComponent', () => {
  let component: TagListComponent;
  let fixture: ComponentFixture<TagListComponent>;
  let userDataService: UserDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TagListComponent],
      providers: [UserDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListComponent);
    component = fixture.componentInstance;
    userDataService = TestBed.get(UserDataService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
