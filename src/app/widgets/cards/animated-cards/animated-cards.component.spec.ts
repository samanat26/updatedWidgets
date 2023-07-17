import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedCardsComponent } from './animated-cards.component';

describe('AnimatedCardsComponent', () => {
  let component: AnimatedCardsComponent;
  let fixture: ComponentFixture<AnimatedCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedCardsComponent]
    });
    fixture = TestBed.createComponent(AnimatedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
