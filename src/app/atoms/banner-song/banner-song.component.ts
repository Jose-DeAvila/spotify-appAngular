import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-song',
  templateUrl: './banner-song.component.html',
  styleUrls: ['./banner-song.component.sass']
})
export class BannerSongComponent implements OnInit {

  constructor() {
    this.bannerUrl = '';
  }

  @Input() bannerUrl:string;

  ngOnInit(): void {
  }

}
