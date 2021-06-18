import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.sass']
})
export class SongListComponent implements OnInit {

  constructor(public clientService:ClientService, private router:Router) {
    this.favorites = [];
  }

  async removeFromFavorites(id:string, index:number){
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token is not provided"}');
    const data = await this.clientService.removeFromFavorite(access_token, id);

    if(data.status === 200){
      this.favorites[index] = false;
    }
  }

  async addToFavorites(id:string, index:number){
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token is not provided"}');
    const data = await this.clientService.addToFavorite(access_token, id);
    if(data.status === 200){
      this.favorites[index] = true;
    }
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([uri]);
    })
  }

  @Input() playlistItems:any;
  @Input() isFavorite:boolean = false;
  @Input() favorites:boolean[];
  @Input() page:number = 0;
  @Input() playlist_id:string = '';
  @Input() isLoading:boolean = true;

  ngOnInit(): void {
  }

}