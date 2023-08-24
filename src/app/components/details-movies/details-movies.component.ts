import { Component } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent {
  
  similarMovies:any []=[
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Meg',
      rate:4.3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 2',
      rate:4.3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 3',
      rate:4.3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 4',
      rate:4.3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 5',
      rate:4.3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 6',
      rate:4.3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 7',
      rate:4.3
    },
    {
      imageUrl:'../../../assets/images/doug-watanabe-p060CZWRGSc-unsplash.jpg',
      title:'Movie 8',
      rate:4.3
    }
  ]
}
