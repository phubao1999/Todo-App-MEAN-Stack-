import { Router } from '@angular/router';
import { ValidateService } from './../../shared/services/helpers/validate.service';
import { CallApiService } from './../../shared/services/call-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, DoCheck {
  isRegister = false;
  formLogin: FormGroup;
  formRegister: FormGroup;
  formLoginErrors = {
    email: '',
    password: ''
  };
  formRegisterErrors = {
    email: '',
    name: '',
    password: ''
  };
  errLoginMess = {
    email: {
      required: 'You Must Enter This Field',
      pattern: 'Must Be A Email'
    },
    password: {
      required: 'You Must Enter Your Password'
    }
  };
  errRegisterMess = {
    email: {
      required: 'You Must Enter This Field',
      pattern: 'Must Be A Email'
    },
    name: {
      required: 'You Must Enter This Field'
    },
    password: {
      required: 'You Must Enter Your Password'
    }
  };
  confirmPassword: string;
  errPassword = false;
  errMessage: string;
  constructor(
    private callApi: CallApiService,
    private formBuilder: FormBuilder,
    private validateService: ValidateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createFormLogin();
    this.createFormRegister();
  }

  ngDoCheck() {
    // console.log(this.formLogin.value.password.length);
  }

  createFormLogin() {
    this.formLogin = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$')]],
      password: ['', [Validators.required]]
    });
    this.formLogin.valueChanges.subscribe(() => {
      this.validateService.getValidate(
        this.formLogin, this.formLoginErrors, this.errLoginMess
      );
    });
  }

  createFormRegister() {
    this.formRegister = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$')]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.formRegister.valueChanges.subscribe(() => {
      this.validateService.getValidate(
        this.formRegister, this.formRegisterErrors, this.errRegisterMess
      );
    });
  }

  toRegister() {
    this.isRegister = true;
  }

  toLogin() {
    this.isRegister = false;
  }

  onKey(e) {
    this.confirmPassword = e.target.value;
  }

  register() {
    const password = this.formRegister.value.password;
    if (this.confirmPassword === '') {
      this.errPassword = true;
      this.errMessage = 'Please Confirm Your Password';
    } else if (this.confirmPassword !== password) {
      this.errPassword = true;
      this.errMessage = 'Please Enter Exactly Your Password';
    } else if (password.length < 4 || password.length > 12) {
      this.errPassword = true;
      this.errMessage = 'Password Must Have More Than 4 Character And Not Over 12 Character';
    } else {
      this.createUser();
    }
  }

  login() {
    const length = this.formLogin.value.password.length;
    if (length < 4 || length > 12) {
      this.errPassword = true;
      this.errMessage = 'Password Must Have More Than 4 Character And Not Over 12 Character';
    } else {
      this.loginUser();
    }
  }

  loginUser() {
    const body = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    };
    this.callApi.login(body).subscribe(res => {
      this.router.navigate(['todo-list']);
      // tslint:disable-next-line:no-string-literal
      localStorage.setItem('auth-token', res['token']);
      // tslint:disable-next-line:no-string-literal
      localStorage.setItem('user-name', res['user']['name']);
    }, err => {
      console.log(err);
    });
  }

  createUser() {
    const body = {
      email: this.formRegister.value.email,
      name: this.formRegister.value.name,
      password: this.formRegister.value.password
    };
    this.callApi.register(body).subscribe(res => {
      // tslint:disable-next-line:no-string-literal
      alert(`Register Success, Welcome ${res['name']}, Please Login Again`);
      this.isRegister = false;
    }, err => {
      console.log(err);
    });
  }

}
