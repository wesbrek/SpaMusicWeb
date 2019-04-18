import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { AlbumsService } from './services/albums.service'

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { from } from 'rxjs';
import { AlbumComponent } from './components/album/album.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumComponent,
    SearcherComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
