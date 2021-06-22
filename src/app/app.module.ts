import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './atoms/banner/banner.component';
import { BannerCaptionComponent } from './atoms/banner-caption/banner-caption.component';
import { BannerFigureComponent } from './molecules/banner-figure/banner-figure.component';
import { LogotypeComponent } from './atoms/logotype/logotype.component';
import { SpotifyButtonComponent } from './atoms/spotify-button/spotify-button.component';
import { InitComponent } from './molecules/init/init.component';
import { HeaderComponent } from './organisms/header/header.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NavElementComponent } from './atoms/nav-element/nav-element.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistsComponent } from './organisms/playlists/playlists.component';
import { BannerSongComponent } from './atoms/banner-song/banner-song.component';
import { SongTitleComponent } from './atoms/song-title/song-title.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SongListComponent } from './organisms/song-list/song-list.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';
import { InputComponent } from './atoms/input/input.component';
import { SearchinputComponent } from './molecules/searchinput/searchinput.component';
import { SearchResultComponent } from './organisms/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BannerCaptionComponent,
    BannerFigureComponent,
    LogotypeComponent,
    SpotifyButtonComponent,
    InitComponent,
    HeaderComponent,
    NavbarComponent,
    NavElementComponent,
    HomeComponent,
    PlaylistsComponent,
    BannerSongComponent,
    SongTitleComponent,
    PlaylistComponent,
    SongListComponent,
    FavoritesComponent,
    SearchComponent,
    InputComponent,
    SearchinputComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
