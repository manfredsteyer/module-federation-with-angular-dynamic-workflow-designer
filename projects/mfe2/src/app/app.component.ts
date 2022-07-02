import { Component } from '@angular/core';
import { AiAnalyzeComponent } from './ai-analyze.component';
import { AnalyzeComponent } from './analyze.component';
import { EnrichComponent } from './enrich.component';

@Component({
  standalone: true,
  imports: [
    AnalyzeComponent,
    EnrichComponent,
    AiAnalyzeComponent,
  ],
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
}
