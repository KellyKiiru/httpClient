import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaleDetailsComponent } from './bale-details.component';

describe('BaleDetailsComponent', () => {
  let component: BaleDetailsComponent;
  let fixture: ComponentFixture<BaleDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaleDetailsComponent]
    });
    fixture = TestBed.createComponent(BaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
