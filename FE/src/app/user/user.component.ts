import { ValidateService } from './../shared/services/helpers/validate.service';
import { CallApiService } from './../shared/services/call-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data;
  formPost: FormGroup;
  formErrors = {
    title: '',
    description: ''
  };
  errMess = {
    title: {required: 'You Must Enter This Field'},
    description: {required: 'You Must Enter This Field'}
  };
  constructor(
    private callApi: CallApiService,
    private formBuilder: FormBuilder,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.getData();
    this.createForm();
  }

  createForm() {
    this.formPost = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.formPost.valueChanges.subscribe(() => {
      this.validateService.getValidate(
        this.formPost, this.formErrors, this.errMess
      );
    });
  }

  getData() {
    this.callApi.getData().subscribe(res => {
      this.data = res;
    }, err => {
      alert(err);
    });
  }

  addNewItem() {
    const body = {
      title: this.formPost.value.title,
      isDone: false,
      description: this.formPost.value.description
    };
    this.callApi.postData(body).subscribe(res => {
      // tslint:disable-next-line:no-string-literal
      alert(`You Have Create Item: ${res['title']}`);
      location.reload();
    }, err => {
      alert(err);
    });
  }

  deleteItem(id) {
    this.callApi.deleteData(id).subscribe(res => {
      alert('Delete Complete');
      location.reload();
    }, err => {
      alert(err.message);
    });
  }

  editItem(id) {
    console.log(id);
  }

}
