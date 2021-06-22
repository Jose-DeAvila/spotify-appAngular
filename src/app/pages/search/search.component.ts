import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private clientService:ClientService) { }

  userInfo:any;
  keyword:any;
  page:any;
  searchItems:any;
  favorites:any;
  loading:boolean = true;

  async fetchFavorites(){
    
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token not provided"}');
    let aux1:string[] = [];
    for(let i = 0; i<this.searchItems.length; i++){
      aux1.push(this.searchItems[i].id);
    }

    const data = await this.clientService.checkInFavorites(access_token, aux1);
    this.favorites = data;
  }

  async fetchSearchResults(){
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token not provided"}');
    const data = await this.clientService.searchKeyword(access_token, this.keyword, this.page);
    this.searchItems = data.items;
    this.loading = false;
    this.fetchFavorites();
  }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.keyword = params.get('keyword') || '';
      this.page = parseInt(params.get('page') || '0');
    });
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{"error":"User data is not provided"}');
    this.userInfo = this.userInfo.error ? undefined : this.userInfo;
    if(!this.userInfo || !localStorage.getItem('tokenInfo')){
      window.location.href = "/";
    }
    this.fetchSearchResults();
  }

}
