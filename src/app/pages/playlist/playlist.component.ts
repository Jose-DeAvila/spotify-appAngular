import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.sass']
})
export class PlaylistComponent implements OnInit {
  
  userInfo:any;

  playlistItems:any;
  favorites:boolean[];
  id:any;
  page:any;
  loading:boolean = true;
  errorMessage:string = '';

  async fetchPlaylistItems(){
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"Error": "Token info is not provided"}');
    const data = await this.clientService.getPlaylistItems(access_token, this.id, this.page);
    if(!data.error && data.items.length > 0){
      this.playlistItems = data.items;
      this.fetchFavorites();
      this.loading = false;
    }else{
      this.playlistItems = [];
      this.loading = false;
    }
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

  fetchRemovePlaylist = async() => {
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '');
    const response = await this.clientService.removePlaylist(access_token, this.id);
    
    if(response.status === 200){
      window.location.href = "/";
    }
  }


  constructor(public clientService: ClientService, private _Activatedroute:ActivatedRoute) { 
    this.favorites = [];
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.page = parseInt(params.get('page') || '0');
    });
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{"error":"User data is not provided"}');
    this.userInfo = this.userInfo.error ? undefined : this.userInfo;
    if(!this.userInfo || !localStorage.getItem('tokenInfo')){
      window.location.href = "/";
    }
    this.fetchPlaylistItems();
  }

}
