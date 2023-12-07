---
sidebar_position: 1
---

# Instalación de Cassandra

<div class="justify-text">

Bienvenido a la guía de instalación de Apache Cassandra, donde desplegarás esta potente base de datos NoSQL de manera sencilla. Aprovecha su escalabilidad horizontal para gestionar grandes volúmenes de datos distribuidos.

Apache Cassandra es una base de datos distribuida, altamente escalable y de código abierto diseñada para gestionar grandes volúmenes de datos de manera eficiente. Pertenece a la categoría de bases de datos NoSQL y se ha desarrollado para proporcionar una alta disponibilidad, tolerancia a fallos y rendimiento excepcional en entornos distribuidos.

</div>


## Instalación de Apache Cassandra

### Windows

1. **Descarga Cassandra:**
   - Visita [la página de descargas de Cassandra](http://cassandra.apache.org/download/) y descarga la última versión de Apache Cassandra para Windows.

2. **Descomprime el Archivo:**
   - Extrae el archivo ZIP descargado a una ubicación de tu elección.

3. **Configuración del Entorno:**
   - Añade la ruta del directorio `bin` de Cassandra al PATH del sistema.

4. **Inicia el Servidor Cassandra:**
   - Abre una consola y ejecuta:

     ```powershell
     cassandra
     ```

### macOS

1. **Instalación con Homebrew:**
   - Abre la Terminal.
   - Instala Cassandra con Homebrew:

     ```bash
     brew install cassandra
     ```

2. **Inicia el Servidor Cassandra:**
   - Inicia el servicio Cassandra:

     ```bash
     brew services start cassandra
     ```

### Linux

1. **Instalación:**
   - Usa el sistema de gestión de paquetes de tu distribución. Ejemplo en Ubuntu:

     ```bash
     sudo apt-get update
     sudo apt-get install cassandra
     ```

2. **Inicia el Servidor Cassandra:**
   - Inicia el servicio Cassandra:

     ```bash
     sudo service cassandra start
     ```

### Docker

1. **Descarga la Imagen de Cassandra:**
   - Ejecuta:

     ```bash
     docker pull cassandra
     ```

2. **Inicia un Contenedor Cassandra:**
   - Ejecuta:

     ```bash
     docker run -d --name cassandra-container-1 -p 9042:9042 cassandra  
     ```

   - Conecta a Cassandra desde una aplicación utilizando el puerto 9042.

   ```bash
      docker exec -it cassandra-container-1 cqlsh    
     ```

[![asciicast](https://asciinema.org/a/9WRTTnYNF73QbeVuEOob8Xdjz.svg)](https://asciinema.org/a/9WRTTnYNF73QbeVuEOob8Xdjz)


## Verificación de la Instalación

Para verificar que Cassandra está funcionando correctamente, puedes utilizar la interfaz de línea de comandos `cqlsh` o conectarte desde una aplicación.

- En Windows, abre una consola y ejecuta `cqlsh`.
- En macOS o Linux, abre la Terminal y ejecuta `cqlsh`.

Luego, puedes ejecutar comandos CQL (Cassandra Query Language) para interactuar con el servidor Cassandra.

Estos son los pasos básicos para instalar Apache Cassandra en diferentes sistemas operativos y Docker. Consulta la documentación oficial de Cassandra para obtener más detalles y opciones de configuración adicionales.


