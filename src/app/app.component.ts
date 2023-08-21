import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  today = new Date()  

  pColor = '';
  
  setTextColor(color:string){
    console.log(color);
    this.pColor = color;
  }

}
