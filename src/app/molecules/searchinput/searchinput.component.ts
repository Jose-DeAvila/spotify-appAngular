import { Component, OnInit, ViewChild } from '@angular/core';
import { InputComponent } from 'src/app/atoms/input/input.component';

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.sass']
})
export class SearchinputComponent implements OnInit {

  constructor() { }

  @ViewChild(InputComponent) child:any;

  sendToSearch = (event:any) => {
    event.preventDefault();
    const keyword = this.child.currentValue;
    if(keyword){
        window.location.href = `/search/${keyword}`;
    }
  }

  ngOnInit(): void {
  }

}
