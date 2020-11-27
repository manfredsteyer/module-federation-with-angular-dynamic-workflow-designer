import { LoadRemoteModuleOptions } from '../../federation-utils';

export type PluginType = 'task' | 'action';

export type PluginOptions = LoadRemoteModuleOptions & {
    type: PluginType;
    displayName: string;
    componentName: string;
};
