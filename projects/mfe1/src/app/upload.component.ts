import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mfe1-upload',
    template: `
        <div class="task">
            <img src="http://localhost:3000/assets/upload.png">
            <p>Upload</p>
        </div>
    `
})

export class UploadComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}