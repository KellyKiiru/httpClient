import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit{


  constructor(private httpClient:HttpClient){}

  similarMovies:any[]=[]

  loadSimilarMovies(){
    this.httpClient.get<any[]>('assets/data/similarMovies.json').subscribe((data:any[])=>{
      console.log(data);
      this.similarMovies=data;
    })
  }

  ngOnInit(): void {
    this.loadSimilarMovies()
  }
}
