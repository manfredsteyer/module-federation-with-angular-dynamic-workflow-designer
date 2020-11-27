import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'shared-lib';

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
    constructor(
        private sharedLibService: SharedLibService) { }

    ngOnInit() {
        console.log("Shared State - Mfe1 ",  this.sharedLibService.state);
     }
}