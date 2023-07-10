import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDisplayComponent } from './cart-display.component';

describe('CartDisplayComponent', () => {
  let component: CartDisplayComponent;
  let fixture: ComponentFixture<CartDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
