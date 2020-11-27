import { PluginOptions } from './plugins/plugin';
import { Component, OnInit } from '@angular/core';
import { LookupService } from './plugins/lookup.service';
import { MatDialog } from '@angular/material/dialog';
import { ActionProxyComponent } from './plugins/action-proxy/action-proxy.component';
import { Workflow } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  taskPlugins: PluginOptions[] = [];
  actionPlugins: PluginOptions[] = [];

  workflow: PluginOptions[] = [];
  showConfig = false;

  constructor(
    private lookupService: LookupService,
    private dialog: MatDialog) {
  }

  async ngOnInit(): Promise<void> {
    this.taskPlugins = (await this.lookupService.lookup()).filter(p => p.type === 'task');
    this.actionPlugins = (await this.lookupService.lookup()).filter(p => p.type === 'action');
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  execute(plugin: PluginOptions): void {

    const workflow:Workflow = {
      name: "DEMO",
      creationDate: new Date(),
    };

    const dialogRef = this.dialog.open(ActionProxyComponent, {
      width: '250px',
      data: {title: plugin.displayName, options: plugin, context: workflow }
    });

    dialogRef.afterClosed().subscribe();
    
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}

