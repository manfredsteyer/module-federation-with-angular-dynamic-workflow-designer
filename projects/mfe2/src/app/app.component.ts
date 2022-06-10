import { Component } from '@angular/core';
import { AnalyzeComponent } from './analyze.component';
import { EnrichComponent } from './enrich.component';

@Component({
  standalone: true,
  imports: [
    AnalyzeComponent,
    EnrichComponent
  ],
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
}
