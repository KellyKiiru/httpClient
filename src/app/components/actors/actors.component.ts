import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private httpClient:HttpClient){}

  movieActors:any[]=[]

  loadMovieActors(){
    this.httpClient.get<any[]>('assets/data/movieActors.json').subscribe((data:any[])=>{
      console.log(data);
      this.movieActors=data;
    })
  }

  ngOnInit(): void {
    this.loadMovieActors()
  }


}
