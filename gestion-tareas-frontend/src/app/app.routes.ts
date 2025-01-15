import { Routes } from '@angular/router';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaForComponent } from './components/tarea-for/tarea-for.component';

export const routes: Routes = [
    {path:'', redirectTo:'/tareas', pathMatch:'full'},
    {path:'tareas', component:TareaListComponent},
    {path:'tareas/new', component:TareaForComponent},
    {path:'tareas/:id/edit', component:TareaForComponent}
];

