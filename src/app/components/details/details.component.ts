import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
 
export class DetailsComponent implements OnInit{
  movieId = ''
  
  stars = [];
  genres = [];
  directors = [];

  constructor(private _activatedRoute: ActivatedRoute, private httpClient:HttpClient){
    this._activatedRoute.params.subscribe((p) =>{
      this.movieId = p['id']
      console.log(this.movieId)
    })
  }

  loadMovieSummary(){
    this.httpClient.get('assets/data/movieSummary.json').subscribe((data:any)=>{
      console.log("Summary = ", data);
      this.stars=data.stars;
      this.genres=data.genres;
      this.directors=data.directors;
    })
  }

  ngOnInit(): void {
    this.loadMovieSummary()
  }  

}
