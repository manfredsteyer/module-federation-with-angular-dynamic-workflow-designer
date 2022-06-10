import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    selector: 'mfe1-upload',
    template: `
        <div class="task">
            <img src="http://localhost:4201/assets/upload.png">
            <p>Upload</p>
        </div>
    `
})

export class UploadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}