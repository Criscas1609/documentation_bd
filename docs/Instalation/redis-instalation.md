---
sidebar_position: 3
---

# Instalación de Redis


Redis es un sistema de almacenamiento en memoria de código abierto y estructura de datos clave-valor. Conocido por su velocidad y versatilidad, Redis se utiliza comúnmente como base de datos en caché, cola de mensajes y almacén de datos en tiempo real para aplicaciones rápidas y escalables. Su estructura de datos admita cadenas, listas, conjuntos, mapas, entre otros, y su rendimiento lo hace ideal para escenarios que requieren acceso rápido a datos.

## Instalación de Redis

### Windows

1. **Descarga Redis:**
   - Visita el [sitio web de Redis](https://redis.io/download) y descarga la última versión estable para Windows.

2. **Descomprime el Archivo:**
   - Extrae el archivo ZIP descargado a una ubicación de tu elección.

3. **Inicia el Servidor Redis:**
   - Ejecuta `redis-server.exe` desde la ubicación donde descomprimiste Redis.

### macOS

1. **Instalación con Homebrew:**
   - Abre la Terminal.
   - Instala Redis con Homebrew:

     ```bash
     brew install redis
     ```

2. **Inicia el Servidor Redis:**
   - Inicia el servicio Redis:

     ```bash
     brew services start redis
     ```

### Linux

1. **Instalación:**
   - Usa el sistema de gestión de paquetes de tu distribución. Ejemplo en Ubuntu:

     ```bash
     sudo apt-get update
     sudo apt-get install redis-server
     ```

   - En distribuciones basadas en Red Hat (como Fedora):

     ```bash
     sudo yum install redis
     ```

2. **Inicia el Servidor Redis:**
   - Inicia el servicio Redis:

     ```bash
     sudo service redis-server start
     ```

### Docker

1. **Descarga la Imagen de Redis:**
   - Ejecuta:

     ```bash
     docker pull redis
     ```

2. **Inicia un Contenedor Redis:**
   - Ejecuta:

     ```bash
     docker run -d --name mi-redis-container -p 6379:6379 redis 
     ```

   - Conecta a Redis desde una aplicación utilizando el puerto 6379.

      ```bash
      docker exec -it mi-redis-container redis-cli
      ```


   [![asciicast](https://asciinema.org/a/k0u2SGwFru7NtGtCkm9Skb736.svg)](https://asciinema.org/a/k0u2SGwFru7NtGtCkm9Skb736)

## Verificación de la Instalación

Para verificar que Redis está funcionando correctamente, puedes abrir una interfaz de línea de comandos y ejecutar el cliente Redis:

- En Windows, abre una nueva consola y ejecuta `redis-cli.exe`.
- En macOS o Linux, abre la Terminal y ejecuta `redis-cli`.

Luego, puedes ejecutar comandos como `ping` para verificar la conexión con el servidor Redis.

Estos son los pasos básicos para instalar Redis en diferentes sistemas operativos y Docker. Consulta la documentación oficial de Redis para detalles más específicos y opciones de configuración adicionales.

