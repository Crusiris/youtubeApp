import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

private youtubeUrl: string = "https://www.googleapis.com/youtube/v3";
private apiKey: string = "AIzaSyBzfj-CvL38TNDUmvNJjJ3Td1AJmDm29Jg";
private  playlist: string = "UUuaPTYj15JSkETGnEseaFFg"

private nextPageToken: string = "";

 params = new  HttpParams().set( 'part', 'snippet' )
                           .set( 'maxResults', '10' )
                           .set( 'playlistId', this.playlist )
                           .set( 'key', this.apiKey )
                           
                            
  //if( this.nextPageToken) {
  // new HttpParams().set( 'pageToken', this.nextPageToken);
  //}

  constructor(public http:HttpClient) { 
    console.log("Servicio Activo");
  }


    getVideos(){
      
      //let url = `${this.youtubeUrl}/playlistItems`;

      if( this.nextPageToken) {
        new HttpParams().set( 'pageToken', this.nextPageToken);
       }
      
          return this.http.get( `${this.youtubeUrl}/playlistItems/`, { params:this.params} )
          
          .pipe( map(( res:any ) =>{
            console.log(res);
            this.nextPageToken = res.nextPageToken;
            console.log(this.nextPageToken);


            let videos: any[] = [];
                      for ( let video of res.items) {
                        let snippet = video.snippet;
                        videos.push(snippet);
                      }
 
                      return videos;
            })
          );

          
    } 
}
