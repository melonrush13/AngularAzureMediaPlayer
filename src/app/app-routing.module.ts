import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieuploadComponent } from './movieupload/movieupload.component';
import { MovieplaybackComponent } from './movieplayback/movieplayback.component';

const routes: Routes = [
   { path: 'Upload', component: MovieuploadComponent },
   { path: 'Playback', component: MovieplaybackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
