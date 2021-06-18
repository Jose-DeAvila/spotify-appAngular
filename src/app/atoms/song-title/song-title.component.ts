import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-title',
  templateUrl: './song-title.component.html',
  styleUrls: ['./song-title.component.sass']
})
export class SongTitleComponent implements OnInit {

  constructor() {
    this.titleSong = '';
  }

  @Input() titleSong:string;

  ngOnInit(): void {
  }

}
