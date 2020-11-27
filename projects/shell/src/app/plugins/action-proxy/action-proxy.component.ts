import { Component, ComponentFactoryResolver, Inject, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loadRemoteModule } from 'projects/shell/src/federation-utils';
import { ActionComponent, Workflow } from 'shared-lib';
import { PluginOptions } from '../plugin';

@Component({
  selector: 'action-proxy',
  templateUrl: './action-proxy.component.html',
  styleUrls: ['./action-proxy.component.css']
})
export class ActionProxyComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private dialogRef: MatDialogRef<ActionProxyComponent>,
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, options: PluginOptions, context: Workflow }) { }
    
  onCloseDialog() {
    this.dialogRef.close();
  }

  async ngOnInit() {
    this.viewContainer.clear();

    const component = await loadRemoteModule(this.data.options)
        .then(m => m[this.data.options.componentName]);

    const factory = this.cfr.resolveComponentFactory<ActionComponent>(component);

    const componentRef = this.viewContainer.createComponent(factory, null, this.injector);
    componentRef.instance.context = this.data.context;
  }


}
