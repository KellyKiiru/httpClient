import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DetailsComponent } from "../components/details/details.component";
import { HomeComponent } from "../components/home/home.component";
import { SearchComponent } from "../components/search/search.component";
import { ActorsComponent } from "../components/actors/actors.component";
import { DetailsMoviesComponent } from "../components/details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../components/details-reviews/details-reviews.component";

const routes:Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'details/:id', component:DetailsComponent},
    {path:'details/actors/:id', component:ActorsComponent},
    {path:'details/movies/:id', component:DetailsMoviesComponent},
    {path:'details/reviews/:id', component:DetailsReviewsComponent},
    {path:'search/:movieTitle', component:SearchComponent},
    // {path:'feedback', component:FeedbackComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}