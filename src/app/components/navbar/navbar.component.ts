import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  hamburgerBtn = false;
  @Output() hamBtnStateUpdate = new EventEmitter<boolean>(this.hamburgerBtn);

  constructor() {}

  ngOnInit(): void {}
  hamBtn() {
    if (this.hamburgerBtn === false) {
      this.hamburgerBtn = true;
      this.hamBtnStateUpdate.emit(this.hamburgerBtn);
    } else {
      this.hamburgerBtn = false;
      this.hamBtnStateUpdate.emit(this.hamburgerBtn);
    }
  }
}
