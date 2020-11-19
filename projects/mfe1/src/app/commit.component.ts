import { Component, Input, OnInit } from '@angular/core';
import { Workflow } from 'projects/shell/src/app/model/workflow.model';

@Component({
    selector: 'mfe1-commit',
    template: `
        <div class="action">
            <p>Workflow {{ context?.name }} Commited</p>
        </div>
    `
})

export class CommitComponent implements OnInit { // implements ActionComponent

    @Input() context: Workflow; 

    constructor() { }

    ngOnInit() { }
}