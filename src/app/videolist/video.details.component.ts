import { Component, OnInit } from '@angular/core';
import { VideoListComponent } from './video.list.component';

@Component({
  selector: 'video-details-component',
  templateUrl: './video.details.component.html',
  styleUrls: ['./video.details.component.scss']
})
export class VideoDetailsComponent extends VideoListComponent implements OnInit{

  ngOnInit(): void {
    if(document.getElementById("overlayStuff")){
      document.getElementById("overlayStuff").addEventListener("click", function(){
        document.getElementById("overlayStuff").style.display = "none";
      });
    }
  }
}
