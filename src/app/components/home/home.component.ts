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

  getFanFavoriteMovies(){
    this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json').subscribe({
      next:(data:any[])=>{
        this.fanFavoriteMovies = data;
    },
      error:(error)=>{
        console.log(error)
      },
      complete: ()=>{
        console.log("request Completed successfully")
      }      
    })
  }
  
  getTopMovies(){
    this.httpClient.get<any[]>('assets/data/topMovies.json').subscribe(
        {
        next:(data:any[])=>{
          this.topMovies = data;
        },
        error:(error)=>{
          console.log(error)
        }
      })
  }

  ngOnInit():void{
    this.getFanFavoriteMovies()
    this.getTopMovies()
  }

}

