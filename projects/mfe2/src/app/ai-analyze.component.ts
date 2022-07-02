import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mfe2-ai-analyze',
    template: `
        <div class="task">
            <img src="http://localhost:4202/assets/android.png">
            <p>Analyze</p>
        </div>
    `
})
export class AiAnalyzeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}