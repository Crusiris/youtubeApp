import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  videos: any[] = [];
  videoSelec: any;

  constructor(public service:YoutubeService) {

    this.service.getVideos().subscribe( videos => {
      console.log(videos);
      this.videos = videos;
    });
   }
   verVideo(video:any){
    this.videoSelec = video ;
    console.log(video);
    $('#myModal').modal();
   }
}
