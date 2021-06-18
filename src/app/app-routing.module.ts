import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './molecules/init/init.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
  {path: '', component: InitComponent},
  {path: 'home', component: HomeComponent},
  {path: 'playlist/:id', component: PlaylistComponent},
  {path: 'playlist/:id/:page', component: PlaylistComponent},
  {path: 'favorite', component: FavoritesComponent},
  {path: 'favorite/:page', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }