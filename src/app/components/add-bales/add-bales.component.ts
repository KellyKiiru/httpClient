import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bales',
  templateUrl: './add-bales.component.html',
  styleUrls: ['./add-bales.component.css']
})
export class AddBalesComponent implements OnInit{

  /**
   *
   */
  constructor(private httpClient:HttpClient) {}

  addedBales:any[] =[]

  addBales(){
    this.httpClient.put<any[]>('http://127.0.0.1:8000/bales/add/', this.addedBales).subscribe((data:any[])=>{
      console.log(data);
      this.addedBales=data;
    })
  }

  ngOnInit(): void {
    this.addBales()
  }

}
