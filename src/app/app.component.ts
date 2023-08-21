import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  today = new Date()  
  hackathonUrl = 'https://agribiz.kenyacic.org/wp-content/uploads/2022/11/AgriBiz%20Program%20Year%204%20Call%20for%20Applications%20guidelines%202022%20_%20Updated%2016-11-2022.pdf'
  price = 20;

  sellingPrice = 18.99;
}
