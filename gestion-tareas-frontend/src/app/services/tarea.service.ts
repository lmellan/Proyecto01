import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea'

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private baseUrl= 'http://localhost:8080/api/tareas';

  // Constructor: Se crea una instancia de una clase, significa que estás generando 
  // un objeto basado en esa clase. Este objeto tiene todas las propiedades 
  // y métodos definidos en la clase, y puedes interactuar con ellos para 
  // realizar tareas específicas.

  // private http: HttpClient: Angular usa inyección de dependencias para proporcionar
  // el servicio HttpClient de forma automática. Este servicio permite hacer solicitudes 
  // HTTP (GET, POST, PUT, DELETE, etc.) a un servidor.

  constructor(private http:HttpClient) { }
  //: Observable<Tarea[]>: Indica que este método devuelve un observable que emite un 
  // arreglo de objetos del tipo Tarea. En Angular, Observables son una forma de manejar
  // datos asincrónicos.

  getAllTareas():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.baseUrl)
  }

  getTareaById(id:number):Observable<Tarea>{
    return this.http.get<Tarea>(`${this.baseUrl}/${id}`)
  }

  createTarea(tarea:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(this.baseUrl, tarea)
  }

  updateTarea(id:number,tarea:Tarea):Observable<Tarea>{
    return this.http.put<Tarea>(`${this.baseUrl}/${id}`, tarea)
  }

  deleteTarea(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }




}
