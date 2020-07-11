import { Component, OnInit } from '@angular/core';
import { LookupService } from '../plugins/lookup.service';
import { PluginOptions } from '../plugins/plugin';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html'
})
export class ConfigComponent implements OnInit {

  constructor(private lookupService: LookupService) { }

  config: PluginOptions[];

  async ngOnInit() {
    this.config = await this.lookupService.lookup();
  }

}
