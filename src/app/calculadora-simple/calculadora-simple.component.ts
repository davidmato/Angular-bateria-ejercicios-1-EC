import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculadora-simple',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculadora-simple.component.html',
  styleUrl: './calculadora-simple.component.css'
})
export class CalculadoraSimpleComponent {

  numero1:number=0;

  numero2:number = 0;

  resultado: number|string = 0;


  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(){
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      this.resultado = 'Error: División por cero';
    }
  }


  raizCuadrada(){
    this.resultado = Math.sqrt(this.numero1);
  }

}
