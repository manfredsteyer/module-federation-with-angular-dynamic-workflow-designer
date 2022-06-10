import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mfe1-download',
    template: `
        <div class="task">
            <img src="http://localhost:4201/assets/download.png">
            <p>Download</p>
        </div>
    `
})

export class DownloadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}