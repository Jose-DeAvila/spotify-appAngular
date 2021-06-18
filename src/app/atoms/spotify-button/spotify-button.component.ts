import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-spotify-button',
  templateUrl: './spotify-button.component.html',
  styleUrls: ['./spotify-button.component.sass']
})
export class SpotifyButtonComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
  }

}
