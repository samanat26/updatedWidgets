import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicBannerComponent } from './pic-banner.component';

describe('PicBannerComponent', () => {
  let component: PicBannerComponent;
  let fixture: ComponentFixture<PicBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicBannerComponent]
    });
    fixture = TestBed.createComponent(PicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
