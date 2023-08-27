import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bale-details',
  templateUrl: './bale-details.component.html',
  styleUrls: ['./bale-details.component.css']
})
export class BaleDetailsComponent implements OnInit{

  constructor(private httpClient:HttpClient){}

  baleDetails:any[]=[]

  loadBaleDetails(){
    this.httpClient.get<any[]>('http://127.0.0.1:8000/bales/1/').subscribe((data:any[])=>{
      this.baleDetails= data;
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.loadBaleDetails()
  }
}
