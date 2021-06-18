import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  constructor() {
    this.bannerImg = '';
  }

  @Input() bannerImg:string;

  sendToHome(){
    window.location.href = "/";
  }

  ngOnInit(): void {
  }

}
