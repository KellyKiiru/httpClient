import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  movieTitle = ''
  searchResults:any[]=[]


  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient){
    this._activatedRoute.params.subscribe((p)=>{
      this.movieTitle = p['movieTitle'];
      console.log(this.movieTitle)
    });
  }

 searchMovies(){
  this.httpClient.get<any[]>('assets/data/searchMovies.json').subscribe((data:any[])=>{
    this.searchResults = data
  })
 }

  ngOnInit(): void {
    this.searchMovies()
  }
}
