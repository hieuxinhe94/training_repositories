import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() LoginClicked = new EventEmitter();
  Open = true;

  constructor() { }

  ngOnInit(): void {
  }

  onShowLoginModal() {
    this.LoginClicked.emit();
  }

}
