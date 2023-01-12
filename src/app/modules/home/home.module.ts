import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MusicQueryComponent } from './components/music-query/music-query.component';

@NgModule({
  declarations: [HomeComponent, MusicPlayerComponent, MusicQueryComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
