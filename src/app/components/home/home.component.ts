import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // use "ctor" to quickly create a constructor
  isVisible = false;
  constructor() {
    
  }

  topMovies:any[]=[
    {
      imageUrl:'../../../assets/images/pexels-saad-alawi-14831456.jpg',
      title:'The Meg',
      actors:'Movie 1 Actors',
      rate:8.4,
      rank:8,
    },
    {
      imageUrl:'../../../assets/images/pexels-saad-alawi-14831456.jpg',
      title:'Insidious',
      actors:'Movie 2 Actors',
      rate:8.4,
      rank:6,
    },
    {
      imageUrl:'../../../assets/images/pexels-saad-alawi-14831456.jpg',
      title:'TMechanical',
      actors:'Movie 3 Actors',
      rate:8.4,
      rank:10,
    }
  ]


  fanFavoriteMovies:any[]=[
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 1 Title',
      actors: 'Movie Actors',
      year: '2023',
      rate: 9.5,
      trophy:1
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 2 Title',
      actors: 'Movie Actors',
      year: '1996',
      rate: 8.5,
      trophy:9
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 3 Title',
      actors: 'Movie Actors',
      year: '2003',
      rate: 7.5,
      trophy:3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 4 Title',
      actors: 'Movie Actors',
      year: '2723',
      rate: 6.5,
      trophy:7
    }
  ]

  // Record is the js equivalent of python dictionaries
  // Which have key:value pairs
  // currentStyles : Record<string,string> = {};
  
  // isSuccess = true;
  // isCentered = true;
  // isLarge = true;

  // constructor(){
  //   this.currentStyles = {
  //     'text-align':this.isCentered? 'center':'',
  //     'color':this.isSuccess? 'green':'red',
  //     'font-size':this.isLarge?'large':'small',
  //   }
  // }
}
