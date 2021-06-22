import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass']
})
export class SearchResultComponent implements OnInit {
  constructor(public clientService:ClientService, private router:Router) {
    this.favorites = [];
  }

  async removeFromFavorites(id:string, index:number){

    this.favorites[index] = false;
    
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token is not provided"}');
    const data = await this.clientService.removeFromFavorite(access_token, id);

    if(data.status !== 200){
      this.favorites[index] = true;
    }
  }

  async addToFavorites(id:string, index:number){
    
    this.favorites[index] = true;
    
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token is not provided"}');
    const data = await this.clientService.addToFavorite(access_token, id);
    
    if(data.status !== 200){
      this.favorites[index] = false;
    }
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([uri]);
    })
  }

  @Input() playlistItems:any;
  @Input() favorites:boolean[];
  @Input() page:number = 0;
  @Input() keyword:string = '';
  @Input() isLoading:boolean = true;
  @Input() error:string = '';

  ngOnInit(): void {
  }
}
