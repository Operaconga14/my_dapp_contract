import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainTutorComponent } from './blockchain-tutor.component';

describe('BlockchainTutorComponent', () => {
  let component: BlockchainTutorComponent;
  let fixture: ComponentFixture<BlockchainTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockchainTutorComponent]
    });
    fixture = TestBed.createComponent(BlockchainTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
