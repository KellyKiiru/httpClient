import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DetailsComponent } from "../components/details/details.component";
import { HomeComponent } from "../components/home/home.component";
import { SearchComponent } from "../components/search/search.component";
import { ActorsComponent } from "../components/actors/actors.component";
import { DetailsMoviesComponent } from "../components/details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../components/details-reviews/details-reviews.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { BalesComponent } from "../components/bales/bales.component";
import { BaleDetailsComponent } from "../components/bale-details/bale-details.component";
import { AddBalesComponent } from "../components/add-bales/add-bales.component";

const routes:Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'details/:id', component:DetailsComponent},
    {path:'details/actors/:id', component:ActorsComponent},
    {path:'details/movies/:id', component:DetailsMoviesComponent},
    {path:'details/reviews/:id', component:DetailsReviewsComponent},
    {path:'search/:movieTitle', component:SearchComponent},
    {path:'bales',component:BalesComponent},
    {path:'bales/details',component:BaleDetailsComponent},
    {path:'bales/add', component:AddBalesComponent},
    {path:'**',component:NotFoundComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}