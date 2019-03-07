import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieuploadComponent } from './movieupload/movieupload.component';
import { MovieplaybackComponent } from './movieplayback/movieplayback.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieuploadComponent,
    MovieplaybackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
