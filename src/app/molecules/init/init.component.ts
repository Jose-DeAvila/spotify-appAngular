import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.sass']
})
export class InitComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ngOnInit(): void {
    if(window.location.search){
      const code:string = this.clientService.getUrlParams();
      this.clientService.getAccessToken(code);
    }
    else{
      if(localStorage.getItem('tokenInfo') && window.location.pathname === '/'){
        const tokenInfoJSON:Dictionary<string> = JSON.parse(window.localStorage.getItem('tokenInfo') || "");
        if(tokenInfoJSON['access_token'] !== null){
          window.location.href = "/home";
        }
      }
    }
  }

}
