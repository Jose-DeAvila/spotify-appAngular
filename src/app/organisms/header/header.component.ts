import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  changeVisibility():void {
    this.visible = !this.visible;
  }

  constructor(public clientService: ClientService) {  }

  visible:boolean = false;
  
  @Input() userInfo:any;

  ngOnInit(): void {
  }

}
