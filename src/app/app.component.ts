import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  today = new Date()  

  timeNow = new Date()
  
  setTimeToNow(){
    this.timeNow = new Date()
  }

}
