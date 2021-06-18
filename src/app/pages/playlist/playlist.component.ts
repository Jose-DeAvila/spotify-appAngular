import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  
  userInfo = {
    display_name: '',
    images: [
      {
        height: null,
        width: null,
        url: ''
      }
    ]
  };

  playlistItems:any;
  favorites:boolean[];
  id:any;
  page:any;
  loading:boolean = true;

  async fetchPlaylistItems(){
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '');
    const data = await this.clientService.getPlaylistItems(access_token, this.id, this.page);
    this.playlistItems = data.items;
    this.loading = false;
    this.fetchFavorites();
  }

  async fetchFavorites(){
    
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '');
    let aux1:string[] = [];
    for(let i = 0; i<this.playlistItems.length; i++){
      aux1.push(this.playlistItems[i].track.id);
    }

    const data = await this.clientService.checkInFavorites(access_token, aux1);
    this.favorites = data;
  }


  constructor(public clientService: ClientService, private _Activatedroute:ActivatedRoute) { 
    this.favorites = [];
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.page = parseInt(params.get('page') || '0');
    });
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '');
    this.fetchPlaylistItems();
  }

}
