import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBalesComponent } from './add-bales.component';

describe('AddBalesComponent', () => {
  let component: AddBalesComponent;
  let fixture: ComponentFixture<AddBalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBalesComponent]
    });
    fixture = TestBed.createComponent(AddBalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
