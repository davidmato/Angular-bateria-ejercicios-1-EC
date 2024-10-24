import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-total-compra',
  standalone: true,
  imports: [
    CurrencyPipe, CommonModule
  ],
  templateUrl: './total-compra.component.html',
  styleUrl: './total-compra.component.css'
})
export class TotalCompraComponent {

  @Input() items: { nombre: string, cantidad: number, precio: number }[] = [];

  get total() {
    return this.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }
}


