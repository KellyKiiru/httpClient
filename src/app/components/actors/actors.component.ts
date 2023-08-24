import { Component } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  movieActor:any[]=[
    {
      imageUrl:'../../../assets/images/jack-anstey-XVoyX7l9ocY-unsplash.jpg',
      name:'Morgan Freeman',
      role:'God'
    }
  ]
}
