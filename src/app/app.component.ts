import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GFC_admin_Frontend';
  isLogin = false;
  login(e: any) {
    this.isLogin = true;
  }
}
