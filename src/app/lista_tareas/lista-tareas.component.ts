import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
    nuevaTarea: String = '';

    listaTareas: String[]=[];


    agregarTarea(){
      if (this.nuevaTarea.trim()){
        this.listaTareas.push(this.nuevaTarea.trim());
        this.nuevaTarea = '';
      }
    }

}
