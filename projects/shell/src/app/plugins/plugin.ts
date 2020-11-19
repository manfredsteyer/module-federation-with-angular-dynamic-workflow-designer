import { LoadRemoteModuleOptions } from '../../federation-utils';
import { Workflow } from '../model/workflow.model';

export type PluginType = 'task' | 'action';

export type PluginOptions = LoadRemoteModuleOptions & {
    type: PluginType;
    displayName: string;
    componentName: string;
};
export interface ActionComponent {
    context: Workflow;
}


