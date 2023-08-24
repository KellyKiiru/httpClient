import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Record is the js equivalent of python dictionaries
  // Which have key:value pairs
  currentStyles : Record<string,string> = {};
  
  isSuccess = true;
  isCentered = true;
  isLarge = true;

  constructor(){
    this.currentStyles = {
      'text-align':this.isCentered? 'center':'',
      'color':this.isSuccess? 'green':'red',
      'font-size':this.isLarge?'large':'small',
    };
  }
}
