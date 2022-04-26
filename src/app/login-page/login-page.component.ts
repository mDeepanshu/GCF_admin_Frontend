import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor() {}
  @Output() loginEvent = new EventEmitter<boolean>();

  ngOnInit(): void {}
  login() {
    this.loginEvent.emit(true);
  }
}
