import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IProductComponent } from './iproduct.component';

describe('IProductComponent', () => {
  let component: IProductComponent;
  let fixture: ComponentFixture<IProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IProductComponent]
    });
    fixture = TestBed.createComponent(IProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
