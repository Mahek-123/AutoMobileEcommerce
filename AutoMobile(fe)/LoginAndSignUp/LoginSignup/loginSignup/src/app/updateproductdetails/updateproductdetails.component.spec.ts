import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductdetailsComponent } from './updateproductdetails.component';

describe('UpdateproductdetailsComponent', () => {
  let component: UpdateproductdetailsComponent;
  let fixture: ComponentFixture<UpdateproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproductdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
