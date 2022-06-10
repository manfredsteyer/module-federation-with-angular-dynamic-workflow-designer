import { Component } from '@angular/core';
import { DownloadComponent } from './download.component';
import { UploadComponent } from './upload.component';

@Component({
  standalone: true,
  imports: [
    DownloadComponent,
    UploadComponent,
  ],
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
}
