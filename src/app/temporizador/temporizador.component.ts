import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  tiempo: number=0;
  tiempo_restante: number = 0;
  private intervalo:any;

  ngOnDestroy(){
    if (this.intervalo){
      clearInterval(this.intervalo)
    }
  }
  detenerTiempo(){
    this.ngOnDestroy();
  }

  iniciarTemporizador(){
    this.ngOnDestroy();
    this.tiempo_restante = this.tiempo;
    this.intervalo = setInterval(() => {
      if(this.tiempo_restante>0){
        this.tiempo_restante--;
      }else {
        this.ngOnDestroy();
      }
    },1000);

  }

}
