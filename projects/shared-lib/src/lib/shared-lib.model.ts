
export interface Workflow {
    name: string,
    creationDate: Date,
}

export interface ActionComponent {
    context: Workflow;
}