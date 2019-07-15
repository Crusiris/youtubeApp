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

    this.service.getVideos()
    .subscribe( videos =>this.videos = videos);
   }

   cargarMas(){
    this.service.getVideos()
    .subscribe( videos =>this.videos.push.apply ( this.videos, videos ));
  }

   verVideo(video:any){
    this.videoSelec = video ;
    $('#myModal').modal();
   }


   cerrarModal(){
    this.videoSelec = null ;
    $('#myModal').modal('hide');
   }

   
}
