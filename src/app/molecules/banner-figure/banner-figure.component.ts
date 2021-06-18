import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-figure',
  templateUrl: './banner-figure.component.html',
  styleUrls: ['./banner-figure.component.sass']
})
export class BannerFigureComponent implements OnInit {

  constructor() {
    this.playlistTitle = '';
    this.bannerUrl = '';
    this.bannerImg = '';
  }

  @Input() playlistTitle:string;
  @Input() bannerUrl:string;
  @Input() bannerImg:string;

  ngOnInit(): void {
  }

}
