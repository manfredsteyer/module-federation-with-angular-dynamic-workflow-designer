import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mfe2-analyze',
    template: `
        <div class="task">
            <img src="http://localhost:4202/assets/analyze.png">
            <p>Analyze</p>
        </div>
    `
})
export class AnalyzeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}