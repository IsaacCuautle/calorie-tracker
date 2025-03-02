# Calorie Tracker

**Calorie Tracker** es una aplicación web diseñada para ayudar a los usuarios a hacer un seguimiento de las calorías consumidas y quemadas a lo largo del tiempo. Esta aplicación fue creada utilizando **React**, **Node.js**, **TypeScript** y **Vite**.

## Características

- **Formulario de registro de actividades**: El usuario puede registrar actividades seleccionando si se trata de un ejercicio o una comida, proporcionando una descripción breve de la actividad y especificando el número de calorías asociadas.
- **Estadísticas resumidas**: La aplicación muestra un resumen con el total de calorías consumidas, las calorías quemadas y la diferencia entre ambas.
- **Lista de actividades registradas**: Se puede ver un historial de todas las actividades registradas, con opciones para editar o eliminar registros previos.

## Imágenes del proyecto

<div
  class="imagenes"  
  style="
  display: flex;"
>
<img 
  style="
    width: 200px; 
    heigth: 300px; "
  src='https://github.com/user-attachments/assets/636895d2-acb9-42f3-acf4-921ccf9797ac'  
/>
<img 
  style="
    width: 400px; 
    heigth: 100px; "
  src='https://github.com/user-attachments/assets/8b967951-b4b0-47fd-b6b0-f25203a33e47'
/>

</div>


## Tecnologías utilizadas

- **React**: Framework de JavaScript para construir interfaces de usuario interactivas.
- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción y desarrollo para aplicaciones modernas.

## Conceptos clave de React

Este proyecto utiliza varios conceptos fundamentales de **React** para gestionar el estado y las actualizaciones de la interfaz de manera eficiente:

- **`state`**: Se utiliza para almacenar el estado de la aplicación, como los datos del formulario y las estadísticas del usuario.
- **`useReducer`**: Este hook es utilizado para gestionar el estado más complejo, como el historial de actividades y las estadísticas, mejorando la estructura del código y la gestión de los cambios en el estado.


## Instalación

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/IsaacCuautle/calorie-tracker.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd calorie-tracker
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```
