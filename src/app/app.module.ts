import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VideoListComponent } from './videolist/video.list.component';
import { VideoDetailsComponent } from './videolist/video.details.component';

const appRoutes: Routes = [
    //{ path: 'crisis-center', component: CrisisListComponent },
    { path: 'videos',      component: VideoListComponent },
    { path: 'video/:id',      component: VideoDetailsComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
	  { path: 'videos', component: VideoListComponent},
	  { path: 'video/:id', component: VideoDetailsComponent},
	  { path: '**', redirectTo: ''}
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
