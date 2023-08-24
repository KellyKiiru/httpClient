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
  
  stars = ['Star 1','Star 2','star 3'];
  genres = ['Genre 1','Genre 2','Genre 3'];
  directors = ['Director 1','Director 2','Director 3'];

  constructor(private _activatedRoute: ActivatedRoute, private httpClient:HttpClient){
    this._activatedRoute.params.subscribe((p) =>{
      this.movieId = p['id']
      console.log(this.movieId)
    })
  }

  loadMovieSummary(){
    this.httpClient.get('assets/data/movieSummary.json').subscribe((data:any)=>{
      console.log("Summary = ", data);
    })
  }

  ngOnInit(): void {
    this.loadMovieSummary()
  }  

}
