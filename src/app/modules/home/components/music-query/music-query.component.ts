import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/shared/interfaces/music.interface';

@Component({
  selector: 'app-music-query',
  templateUrl: './music-query.component.html',
  styleUrls: ['./music-query.component.scss'],
})
export class MusicQueryComponent implements OnInit {
  musicPlay: Music[] = [
    {
      musicName: 'Dancing in the moonlight',
      musicArtist: 'Toploader',
      finalDuration: '3:58',
    },
    {
      musicName: 'Dancing in the moonlight',
      musicArtist: 'Toploader',
      finalDuration: '3:58',
    },
    {
      musicName: 'Dancing in the moonlight',
      musicArtist: 'Toploader',
      finalDuration: '3:58',
    },
    {
      musicName: 'Dancing in the moonlight',
      musicArtist: 'Toploader',
      finalDuration: '3:58',
    },
    {
      musicName: 'Dancing in the moonlight',
      musicArtist: 'Toploader',
      finalDuration: '3:58',
    },
    {
      musicName: 'Dancing in the moonlight',
      musicArtist: 'Toploader',
      finalDuration: '3:58',
    },
    {
      musicName: 'Dancing in the moonlight',
      musicArtist: 'Toploader',
      finalDuration: '3:58',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
