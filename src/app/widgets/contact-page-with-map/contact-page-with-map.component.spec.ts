import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageWithMapComponent } from './contact-page-with-map.component';

describe('ContactPageWithMapComponent', () => {
  let component: ContactPageWithMapComponent;
  let fixture: ComponentFixture<ContactPageWithMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPageWithMapComponent]
    });
    fixture = TestBed.createComponent(ContactPageWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
