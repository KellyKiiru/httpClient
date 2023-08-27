import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalesComponent } from './bales.component';

describe('BalesComponent', () => {
  let component: BalesComponent;
  let fixture: ComponentFixture<BalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalesComponent]
    });
    fixture = TestBed.createComponent(BalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
