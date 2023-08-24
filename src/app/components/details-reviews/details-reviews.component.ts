import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit{

  constructor(private httpClient:HttpClient){}

  movieRates:any[]=[]

  loadMovieRates(){
    this.httpClient.get<any[]>('assets/data/movieRates.json').subscribe((data:any[])=>{
      console.log(data);
      this.movieRates=data;
    })
  }

  ngOnInit(): void {
    this.loadMovieRates()
  }
}
