import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() inputType:string = '';
  @Input() placeholder:string = '';
  currentValue:string = '';

  changeValue(event:any){
    this.currentValue = event.target.value;
  }

  ngOnInit(): void {
  }

}
