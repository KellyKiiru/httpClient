import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  today = new Date()  
  imgUrl = 'https://images.unsplash.com/photo-1682685797527-63b4e495938f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
  imgWidth= 100;
  price = 20;

  sellingPrice = 18.99;

  attributevalue = 'movies-value'
}
