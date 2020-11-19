import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionProxyComponent } from './action-proxy.component';

describe('ActionProxyComponent', () => {
  let component: ActionProxyComponent;
  let fixture: ComponentFixture<ActionProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionProxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
