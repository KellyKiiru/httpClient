import { Component } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent {
  movieRates:any[]=[
    {
      rate:7.4,
      review:"This will be the review section of our movies section and sometimes it gets too big. That is why we will use an accordion",
      author:'Matt Damon',
      usefulCount: 83,
      totalCount:120
    },
    {
      rate:6.3,
      review:"This will be the review section of our movies section and sometimes it gets too big. That is why we will use an accordion",
      author:'Matt Damon',
      usefulCount: 10,
      totalCount:120
    },
    {
      rate:9.1,
      review:"This will be the review section of our movies section and sometimes it gets too big. That is why we will use an accordion",
      author:'Matt Damon',
      usefulCount: 90,
      totalCount:100
    }
  ]
}
