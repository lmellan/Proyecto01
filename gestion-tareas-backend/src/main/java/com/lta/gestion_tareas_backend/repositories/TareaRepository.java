package com.lta.gestion_tareas_backend.repositories;

import com.lta.gestion_tareas_backend.entities.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface TareaRepository extends JpaRepository<Tarea, Long> {
}
