import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOptions[]> {
        return Promise.resolve([
            {
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'mfe1',
                exposedModule: './Download',

                type: 'task',
                displayName: 'Download',
                componentName: 'DownloadComponent'
            },
            {
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'mfe1',
                exposedModule: './Upload',

                type: 'task',
                displayName: 'Upload',
                componentName: 'UploadComponent'
            },
            {
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                remoteName: 'mfe1',
                exposedModule: './Commit',

                type: 'action',
                displayName: 'Commit',
                componentName: 'CommitComponent'
            },
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'mfe2',
                exposedModule: './Analyze',

                type: 'task',
                displayName: 'Analyze',
                componentName: 'AnalyzeComponent'
            },
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'mfe2',
                exposedModule: './Enrich',

                type: 'task',
                displayName: 'Enrich',
                componentName: 'EnrichComponent'
            }
        ] as PluginOptions[]);
    }
}
