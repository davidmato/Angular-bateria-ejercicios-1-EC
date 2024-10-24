import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-tarjeta-producto-compra',
  standalone: true,
  imports: [
    CurrencyPipe, CommonModule
  ],
  templateUrl: './tarjeta-producto-compra.component.html',
  styleUrl: './tarjeta-producto-compra.component.css'
})
export class TarjetaProductoCompraComponent {
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
  @Output() agregar = new EventEmitter<void>();
  @Output() quitar = new EventEmitter<void>();

  onAgregar() {
    this.agregar.emit();
  }

  onQuitar() {
    this.quitar.emit();
  }
}
