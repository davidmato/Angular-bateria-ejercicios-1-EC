import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  nuevoComentario:String=''
  @Output() comentarioEnviado = new EventEmitter<String>();


  enviar(){
    if (this.nuevoComentario.trim()){
      this.comentarioEnviado.emit(this.nuevoComentario.trim());
      this.nuevoComentario = '';
    }
  }




}
