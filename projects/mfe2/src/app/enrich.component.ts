import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mfe2-enrich',
    template: `
        <div class="task">
            <img src="http://localhost:4202/assets/enrich.png">
            <p>Enrich</p>
        </div>
    `
})
export class EnrichComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}