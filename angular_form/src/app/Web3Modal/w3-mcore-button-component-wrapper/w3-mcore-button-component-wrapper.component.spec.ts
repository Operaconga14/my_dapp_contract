import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W3McoreButtonComponentWrapperComponent } from './w3-mcore-button-component-wrapper.component';

describe('W3McoreButtonComponentWrapperComponent', () => {
  let component: W3McoreButtonComponentWrapperComponent;
  let fixture: ComponentFixture<W3McoreButtonComponentWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [W3McoreButtonComponentWrapperComponent]
    });
    fixture = TestBed.createComponent(W3McoreButtonComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
