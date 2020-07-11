import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mfe1-download',
    template: `
        <div class="task">
            <img src="http://localhost:3000/assets/download.png">
            <p>Download</p>
        </div>
    `
})

export class DownloadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}