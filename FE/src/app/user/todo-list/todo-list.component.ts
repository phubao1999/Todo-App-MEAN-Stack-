import { Router } from '@angular/router';
import { ValidateService } from '../../shared/services/helpers/validate.service';
import { CallApiService } from '../../shared/services/call-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
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
  name;
  constructor(
    private callApi: CallApiService,
    private formBuilder: FormBuilder,
    private validateService: ValidateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
    this.createForm();
    this.name = localStorage.getItem('user-name');
  }

  logout() {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-name');
    location.reload();
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
    this.router.navigate([`todo-list/item/${id}`]);
  }

  back() {
    this.router.navigate(['']);
  }

}
