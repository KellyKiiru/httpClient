import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DetailsComponent } from "../components/details/details.component";
import { HomeComponent } from "../components/home/home.component";
import { SearchComponent } from "../components/search/search.component";

const routes:Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'details', component:DetailsComponent},
    {path:'search', component:SearchComponent},
    // {path:'feedback', component:FeedbackComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule {}