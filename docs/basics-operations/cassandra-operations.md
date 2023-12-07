---
sidebar_position: 1
---

# Básico en Cassandra

## Operaciones Básicas en Cassandra

### Keyspace
- Crear un keyspace para películas:
  ```bash
   CREATE KEYSPACE cine
   WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3}; 
  ```

- Usar un keyspace:

  ```bash
   USE cine;
  ```

- Eliminar el keyspace de la biblioteca:

  ```bash
   DROP KEYSPACE cine;
  ```


### Tablas

- Crear una tabla:

  ```bash
    CREATE TABLE peliculas (
      id UUID PRIMARY KEY,
      titulo text,
      director text,
      genero text,
      anio_estreno int
  );
  ```
- Eliminar la tabla:

  ```bash
   DROP TABLE peliculas;
  ```

### Elemento

- Insertar datos en la tabla de libros:

  ```bash
    INSERT INTO peliculas (id, titulo, director, genero, anio_estreno)
    VALUES (uuid(), 'Titanic', 'James Cameron', 'Romance', 1997);
  ```

- Consultar información sobre un elemento por atributo:

  ```bash
    SELECT * FROM peliculas WHERE id = la_id;

  ```

- Actualizar elemento:

  ```bash
    UPDATE peliculas SET anio_estreno = nuevo_anio WHERE id = la_id;
  ```

- Eliminar un elemento por atributo:
  ```bash
    DELETE FROM peliculas WHERE id = la_id;
  ```

- Crear un índice en el autor para facilitar búsquedas:

  ```bash
    CREATE INDEX idx_director ON peliculas (director);
  ```

Estos son ejemplos básicos para darte una idea de cómo usar comandos de Cassandra en el contexto de una biblioteca y libros.


# Aplicación parciales
## Explicación de caso de uso

*El contexto de aplicación gira en torno al desarrollo de un sistema generador de exámenes parciales. Este proyecto surge como resultado de la automatización del proceso de creación de evaluaciones parciales destinadas a profesores. La finalidad de este innovador sistema es simplificar y acelerar la labor docente al proporcionar una herramienta eficaz y personalizable. Esta herramienta permitirá la generación rápida y precisa de exámenes parciales, optimizando así el tiempo dedicado a la preparación de material evaluativo. Con esta solución automatizada, los educadores pueden dirigir su energía hacia actividades pedagógicas más significativas. Al mismo tiempo, se asegura la calidad y relevancia de los exámenes parciales utilizados para evaluar el desempeño académico de los estudiantes.*


![Partial](./data/diagrama_partial_generator.jpeg)

Crear y ver las datos de las tablas

[![asciicast](https://asciinema.org/a/g7nQId38nH5aAkqnwWZ8sm7g8.svg)](https://asciinema.org/a/g7nQId38nH5aAkqnwWZ8sm7g8)