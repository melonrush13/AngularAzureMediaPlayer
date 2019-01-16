import { Component } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Northern Sky Video Player!';

  public moviesList = [
    { id: 1, name: 'MovieOne', img: 'assets/img/sean.png',
    url: '//seusherams-usct.streaming.media.azure.net/5282e59e-fbd3-4e61-aab7-bc1d567793c9/star_trails.ism/manifest'},
    { id: 2, name: 'MovieTwo', img: 'assets/img/sean.png',
    url: '//seusherams-usct.streaming.media.azure.net/a70afc20-234d-4f63-9e21-ef55d0194283/Panasonic_HDC_TM_700_P_50i.ism/manifest'},
    { id: 3, name: 'MovieThree', img: 'assets/img/sean.png',
    url: '//seusherams-usct.streaming.media.azure.net/f08db708-0a99-45d6-b3fe-b3de9992a6ac/jellyfish-25-mbps-hd-hevc.ism/manifest'},
    { id: 4, name: 'MovieFour', img: 'assets/img/sean.png',
    url: '//seusherams-usct.streaming.media.azure.net/c67cdfc7-2375-49e9-b413-d192cb48c60d/SampleVideo_1280x720_1mb.ism/manifest'}
  ];

  // currentMovie = this.moviesList[0].url;
  currentMovie = '//willzhanmswest.streaming.mediaservices.windows.net/6f9c2ea5-d98f-4cbd-be90-57e3a41dfef7/EvalaTrailera.ism/manifest';

  public setCurrentMovie(url) {
    this.currentMovie = url;
  }
}
