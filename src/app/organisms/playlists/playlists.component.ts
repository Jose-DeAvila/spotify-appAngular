import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.sass']
})
export class PlaylistsComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  playlists:any;

  async getPlaylists(){
    const {access_token} = JSON.parse(localStorage.getItem('tokenInfo') || '{"error":"Access token is not provided"}');
    const data = await this.clientService.getUserPlaylists(access_token);
    this.playlists = data.items;
  }

  ngOnInit(): void {
    this.getPlaylists();
  }

}
