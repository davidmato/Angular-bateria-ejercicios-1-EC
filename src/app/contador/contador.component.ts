import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  horaActual:String = " ";
  private intervalo: any;

  actualizarHora(){
    const ahora=new Date();
    this.horaActual=ahora.toLocaleTimeString()
  }

  ngOnInit(){
    this.actualizarHora();
    this.intervalo= setInterval(()=>{this.actualizarHora();},1000);
  }

  ngOnDestroy(){
    if (this.intervalo){
      clearInterval(this.intervalo)
    }
  }




}
