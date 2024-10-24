import { Component } from '@angular/core';
import {ComentariosComponent} from '../comentarios/comentarios.component';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-padre-comnt',
  standalone: true,
  imports: [ComentariosComponent, NgFor],
  templateUrl: './padre-comnt.component.html',
  styleUrl: './padre-comnt.component.css'
})
export class PadreComntComponent {
  listaComentario: String[] = [];


  agregarLista(Comentarios:String){
    this.listaComentario.push(Comentarios)
  }

}
