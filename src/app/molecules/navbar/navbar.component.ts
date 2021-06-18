import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() {
    this.visible=false;
  }

  @Input() visible:boolean;

  ngOnInit(): void {
  }

}
