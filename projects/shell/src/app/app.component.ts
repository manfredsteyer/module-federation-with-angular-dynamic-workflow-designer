import { PluginOptions } from './plugins/plugin';
import { Component, OnInit } from '@angular/core';
import { LookupService } from './plugins/lookup.service';
import { ConfigComponent } from './config/config.component';
import { PluginProxyComponent } from './plugins/plugin-proxy.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    ConfigComponent,
    PluginProxyComponent,
    CommonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  plugins: PluginOptions[] = [];
  workflow: PluginOptions[] = [];
  showConfig = false;

  constructor(
    private lookupService: LookupService) {
  }

  async ngOnInit(): Promise<void> {
    this.plugins = await this.lookupService.lookup();
  }

  add(plugin: PluginOptions): void {
    this.workflow.push(plugin);
  }

  toggle(): void {
    this.showConfig = !this.showConfig;
  }
}

