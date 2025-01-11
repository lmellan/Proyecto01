package com.lta.gestion_tareas_backend.services.implementation;

import com.lta.gestion_tareas_backend.entities.Tarea;
import com.lta.gestion_tareas_backend.repositories.TareaRepository;
import com.lta.gestion_tareas_backend.services.TareaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class TareaServiceImpl implements TareaService {

    @Autowired
    private TareaRepository tareaRepository;

    @Override
    public List<Tarea> getAllTareas() {
        return tareaRepository.findAll();
    }

    @Override
    public Optional<Tarea> getTareaById(Long id) {
        return tareaRepository.findById(id);
    }

    @Override
    public Tarea createTarea(Tarea tarea) {
        System.out.println(tarea.getTitulo());
        System.out.println(tarea.getDescripcion());
        System.out.println(tarea.isCompletado());
        System.out.println(tarea.getId());
        return tareaRepository.save(tarea);
    }

    @Override
    public Tarea updateTarea(Long id, Tarea tarea) {
        if(tareaRepository.existsById(id)){
            return tareaRepository.save(tarea);
        }
        return null;
    }

    @Override
    public void deleteTarea(Long id) {
        tareaRepository.deleteById(id);


    }
}
