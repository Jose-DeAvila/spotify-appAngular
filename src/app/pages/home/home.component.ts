import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  userInfo:any;

  constructor() { 
  }

  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{"error":"User data is not provided"}');
    this.userInfo = this.userInfo.error ? undefined : this.userInfo;
    if(!this.userInfo || !localStorage.getItem('tokenInfo')){
      // window.location.href = "/";
    }
  }

}
