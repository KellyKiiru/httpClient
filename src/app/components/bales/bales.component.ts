import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bales',
  templateUrl: './bales.component.html',
  styleUrls: ['./bales.component.css']
})
export class BalesComponent implements OnInit {


  constructor(private httpClient:HttpClient) {
    
  }

  bales:any[] =[]

  loadBales(){
    this.httpClient.get<any[]>('http://127.0.0.1:8000/bales/').subscribe((data:any[])=>{
      console.log(data);
      this.bales=data;
    })
  }

  ngOnInit(){
    this.loadBales()
  }
  
}