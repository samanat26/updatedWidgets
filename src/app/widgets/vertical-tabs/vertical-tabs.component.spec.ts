import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTabsComponent } from './vertical-tabs.component';

describe('VerticalTabsComponent', () => {
  let component: VerticalTabsComponent;
  let fixture: ComponentFixture<VerticalTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalTabsComponent]
    });
    fixture = TestBed.createComponent(VerticalTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
