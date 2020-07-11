import { LoadRemoteModuleOptions } from '../../federation-utils';

export type PluginOptions = LoadRemoteModuleOptions & {
    displayName: string;
    componentName: string;
};


