import {Component, Input} from '@angular/core';
import {InterfaceEntry} from '@angular/compiler-cli';
import {CurrencyPipe, PercentPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    PercentPipe
  ],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {
  @Input() nombre:string='';
  @Input() descripcion:string='';
  @Input() precio:number=0;




}


