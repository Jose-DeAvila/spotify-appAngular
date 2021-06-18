import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-caption',
  templateUrl: './banner-caption.component.html',
  styleUrls: ['./banner-caption.component.sass']
})
export class BannerCaptionComponent implements OnInit {

  @Input() bannerCaption:string;

  constructor() {
    this.bannerCaption = '';
  }

  ngOnInit(): void {
  }

}