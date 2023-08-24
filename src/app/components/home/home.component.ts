import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // use "ctor" to quickly create a constructor


  constructor(private httpClient:HttpClient) {
    
  }

  isActive = true;  

  topMovies:any[]=[
  ]

  fanFavoriteMovies:any[]=[
  ]


}

