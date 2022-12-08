import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task1';
  hamburgerBtn: boolean = false;
  hambtnState(hamBtn: boolean) {
    this.hamburgerBtn = hamBtn;
    console.warn(this.hamburgerBtn);
  }
}
