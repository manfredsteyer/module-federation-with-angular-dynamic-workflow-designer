import { Component, Input, OnInit } from '@angular/core';
import { ActionComponent, Workflow } from 'shared-lib';

@Component({
    selector: 'mfe1-commit',
    template: `
        <div class="action">
            <p>Workflow {{ context?.name }} Commited</p>
        </div>
    `
})

export class CommitComponent implements ActionComponent, OnInit { // implements ActionComponent

    @Input() context: Workflow; 

    constructor() { }

    ngOnInit() { }
}