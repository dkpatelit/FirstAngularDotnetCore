import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, FormArray } from '@angular/forms';
import { StudentModel } from '../users-list/users-list.component';
import { UserDataService } from '../user-data.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  studentEntity: StudentModel = null;
  studentForm: FormGroup;
  errorMessage: string;
  
  Tags = new FormArray([]);

  constructor(private fb: FormBuilder, private userData: UserDataService) {
  }

  ngOnInit(): void {

    this.studentEntity = { Id: 0, FirstName: null, LastName: null, CompanyName: null, EmailId: null, Address: null, City: null, Gender: null, PhoneNumber: null, Friends: null, Tags: null };

    this.studentForm = this.fb.group({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      CompanyName: new FormControl('', [Validators.required]),
      EmailId: new FormControl('', [Validators.required, ValidationService.emailValidator]),
      Address: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      Gender: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Friends: this.fb.group({ data: this.fb.array([]) })
    });
    
  }

  addFriend(val) {
    const friendCollection = <FormArray>this.studentForm.get('Friends.data');
    friendCollection.push(this.getFriendObject(0, val));
  }

  getFriendObject(id, name) {
    return this.fb.group({
      id: id,
      name: name
    })
  }

  submitForm() {

    console.log(this.studentForm.controls.Friends.value.data);

    if (this.studentForm.valid) {
      this.studentEntity.FirstName = this.studentForm.controls.FirstName.value;
      this.studentEntity.LastName = this.studentForm.controls.LastName.value;
      this.studentEntity.CompanyName = this.studentForm.controls.CompanyName.value;
      this.studentEntity.EmailId = this.studentForm.controls.EmailId.value;
      this.studentEntity.Address = this.studentForm.controls.Address.value;
      this.studentEntity.City = this.studentForm.controls.City.value;
      this.studentEntity.Gender = this.studentForm.controls.Gender.value;
      this.studentEntity.PhoneNumber = this.studentForm.controls.PhoneNumber.value;

      console.log(this.studentForm.controls.Friends.value.data);
      //this.studentEntity.Friends = this.studentForm.controls.Friends.value;

      console.log(this.studentEntity);

      this.userData.postStudentData(this.studentEntity);
    }
    else {
      Object.keys(this.studentForm.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.studentForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            this.errorMessage = key + " is not valid : " + keyError;
          });
        }
      });
    }

  }
}
