import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { ActorsComponent } from './components/actors/actors.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './modules/app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { BalesComponent } from './components/bales/bales.component';
import { BaleDetailsComponent } from './components/bale-details/bale-details.component';
import { AddBalesComponent } from './components/add-bales/add-bales.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    ModalComponent,
    NavbarComponent,
    NotAuthorizedComponent,
    SearchComponent,
    ActorsComponent,
    NotFoundComponent,

    // pipes
    ProfitPipe,
     HeaderDirective,
     MyIfDirective,
     BalesComponent,
     BaleDetailsComponent,
     AddBalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
