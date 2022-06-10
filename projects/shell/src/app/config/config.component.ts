import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LookupService } from '../plugins/lookup.service';
import { PluginOptions } from '../plugins/plugin';

@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
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
