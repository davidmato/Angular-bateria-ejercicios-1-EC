import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProductoCompraComponent } from './tarjeta-producto-compra.component';

describe('TarjetaProductoCompraComponent', () => {
  let component: TarjetaProductoCompraComponent;
  let fixture: ComponentFixture<TarjetaProductoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaProductoCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaProductoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
