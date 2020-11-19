import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download.component';
import { UploadComponent } from './upload.component';
import { CommitComponent } from './commit.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    DownloadComponent,
    UploadComponent,
    CommitComponent
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
