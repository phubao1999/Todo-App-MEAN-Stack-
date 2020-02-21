import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  isRegister = false;
  constructor() { }

  ngOnInit() {
  }

  toRegister() {
    this.isRegister = true;
  }

  toLogin() {
    this.isRegister = false;
  }

}
