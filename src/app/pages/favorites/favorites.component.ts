import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {

  constructor(public clientService: ClientService, private _Activatedroute:ActivatedRoute) { }

  userInfo:any;

  favoritesItems:any;
  favorites:any;
  page:any;
  loading:boolean = true;

  async fetchFavoriteSongs(){
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token not provided"}');
    const data = await this.clientService.getFavoritesSongs(access_token, this.page);
    this.favoritesItems = data.items;
    this.loading = false;
    this.fetchFavorites();
  }

  async fetchFavorites(){
    
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token not provided"}');
    let aux1:string[] = [];
    for(let i = 0; i<this.favoritesItems.length; i++){
      aux1.push(this.favoritesItems[i].track.id);
    }

    const data = await this.clientService.checkInFavorites(access_token, aux1);
    this.favorites = data;
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = parseInt(params.get('page') || '0');
    })
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{"error":"User data is not provided"}');
    console.log(this.userInfo);
    this.userInfo = this.userInfo.error ? undefined : this.userInfo;
    if(!this.userInfo || !localStorage.getItem('tokenInfo')){
      // window.location.href = "/";
    }
    this.fetchFavoriteSongs()
  }

}
