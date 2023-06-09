import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsContainersComponent } from './forms-containers.component';

describe('FormsContainersComponent', () => {
  let component: FormsContainersComponent;
  let fixture: ComponentFixture<FormsContainersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsContainersComponent]
    });
    fixture = TestBed.createComponent(FormsContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
