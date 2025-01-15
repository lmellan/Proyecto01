import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-for',
  imports: [FormsModule],
  templateUrl: './tarea-for.component.html',
  styleUrl: './tarea-for.component.css'
})
export class TareaForComponent {

  tarea:Tarea = new Tarea();

  constructor(private tareaService:TareaService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    const tareaId = +this.route.snapshot.paramMap.get('id')!; //obtiene el parametro id de la URL  y snapshot captura una instantánea del estado actual de la ruta en un momento dado.
    if(tareaId){
      this.tareaService.getTareaById(tareaId).subscribe(tarea => {
        this.tarea=tarea;
      })
    }
  }

  // this.tareaService.getTareaById(tareaId): Devuelve un observable que contiene los datos de la tarea 
  // subscribe(tarea => { this.tarea = tarea; }): Te suscribes a este observable. 
  // Cuando el observable emite un valor (el detalle de la tarea), el callback (la función dentro del subscribe) se ejecuta.
  // Este valor (tarea) se asigna a this.tarea.



  onSaveTarea():void{
    if(this.tarea.id){
      this.tareaService.updateTarea(this.tarea.id,this.tarea).subscribe(updateTarea => {
        this.router.navigate(['/tareas']);
      })
    }else{
      this.tareaService.createTarea(this.tarea).subscribe(savedTarea => {
        this.router.navigate(['/tareas']);   
      })
    }
  }


}
