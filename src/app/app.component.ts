import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import {ContadorComponent} from './contador/contador.component';
import {ListaTareasComponent} from './lista_tareas/lista-tareas.component';
import {TemporizadorComponent} from './temporizador/temporizador.component';
import {ComentariosComponent} from './comentarios/comentarios.component';
import {PadreComntComponent} from './padre_comnt/padre-comnt.component';
import {TarjetaProductoComponent} from './tarjeta_producto/tarjeta-producto.component';
import {CalculadoraSimpleComponent} from './calculadora-simple/calculadora-simple.component';
import {TotalCompraComponent} from './total_compra/total-compra.component';
import {TarjetaProductoCompraComponent} from './tarjeta-producto-compra/tarjeta-producto-compra.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, ContadorComponent, ListaTareasComponent, TemporizadorComponent, ComentariosComponent, PadreComntComponent, TarjetaProductoComponent, CalculadoraSimpleComponent, TotalCompraComponent, TarjetaProductoCompraComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosEC';


  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción 1', precio: 10 },
    { nombre: 'Producto 2', descripcion: 'Descripción 2', precio: 20 },
    { nombre: 'Producto 3', descripcion: 'Descripción 3', precio: 30 }
  ];

  items: { nombre: string, cantidad: number, precio: number }[] = [];

  agregarProducto(producto: any) {
    const item = this.items.find(i => i.nombre === producto.nombre);
    if (item) {
      item.cantidad++;
    } else {
      this.items.push({ ...producto, cantidad: 1 });
    }
  }

  quitarProducto(producto: any) {
    const item = this.items.find(i => i.nombre === producto.nombre);
    if (item) {
      item.cantidad--;
      if (item.cantidad === 0) {
        this.items = this.items.filter(i => i.nombre !== producto.nombre);
      }
    }
  }
}
