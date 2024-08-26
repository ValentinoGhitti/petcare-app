# petcare-app

## Clonar repositorio

Para clonar el repo, seguí estos pasos:

1. **Abrí tu Git Bash o terminal favorita.**

2. **Ejecuta el siguiente comando para clonar el repositorio:**

    ```bash
    git clone git@github.com:ValentinoGhitti/petcare-app.git
    ```

3. **Navegá al directorio del repositorio clonado:**

    ```bash
    cd petcare-app
    ```
    
    Para abrir el proyecto en tu visual o IDE
    ```bash
    code .
    ```
4. **¡Listorti!**

## Configuración del Proyecto

Pasos para configurar y ejecutar el proyecto:

1. **Instala las dependencias del proyecto.** Ejecuta el siguiente comando en la terminal:

    ```bash
    npm install
    ```
    
3. **Compilá y recargá el proyecto en dev mode .** Para levantar el proyecto en localhost :

    ```bash
    npm run serve
    ```

---
### CHANGELOG

1. Se corrigieron estilos para ser lo más fiel posible al diseño:
2. Se modularizó el store, separando las logicas dependiendo las views.

![image](https://github.com/user-attachments/assets/e557c14b-3e57-436f-9daf-9d8f44042979)

Si bien la correción decía de que que era necesario utilizar stores independientes para cada cosa, considero que por el tamaño de la app es innecesaro crear dos instancias de una store. Generaría problemas a la larga, redundancia y complejidad innecesaria.
Modularizando de esta forma podemos mantener el código organizado, permitiendo una separación clara de responsabilidades sin la necesidad de instanciar múltiples stores.



### Funcionalidades Principales de la app

- **Autenticación y Autorización**: 
  - Registro de nuevos usuarios.
  - Inicio de sesión y cierre de sesión.
  - Recuperación de contraseñas con validación para usuarios registrados.
  - Persistencia de usuarios utilizando `localStorage` para mantener el estado de autenticación.
  - Guardias en el router para prevenir el acceso directo al dashboard sin autenticación.

- **Validaciones**:
  - Las credenciales de usuario deben ser válidas para el inicio de sesión.
  - Contraseñas deben tener al menos 6 caracteres.
  - El campo de correo electrónico debe contener un `@` y un `.com`.
  - Validación de correos electrónicos para la recuperación de contraseñas.
    

 ### PCHealthMonitoringChart
 
![image](https://github.com/user-attachments/assets/5c864421-015b-4764-a3a0-f822e3362a8a)

- **Interactividad del Sparking**:
  - El gráfico responde a la selección de rangos de datos (Daily, Weekly, Monthly).
  - Los datos se ajustan según el rango seleccionado, generando datos nuevos o filtrando los existentes.
  - Se implementa lógica para reiniciar el estado del gráfico cuando se cambia el rango.

- **Gestión de Estado con Vuex**:
  - La `store` maneja el estado global de los datos del gráfico.
  - Los módulos de Vuex incluyen acciones y mutaciones para actualizar los datos basados en la selección de rango.
  - La tienda proporciona los datos necesarios al componente gráfico y reacciona a los cambios en el estado global.

- **Componentes**:
  - El componente gráfico se actualiza de manera reactiva según los cambios en la tienda de Vuex.
  - Se utiliza lógica para manejar el renderizado dinámico de datos.
  - El componente asegura que la visualización se actualice correctamente con el estado actual de los datos almacenados.

---

### PCVaccinationSchedule

![image](https://github.com/user-attachments/assets/98faa88b-59df-458d-a139-991c33641edc)


  - **Interfaz de Usuario**:
    - Carga inicial con un `v-skeleton-loader` mientras se obtienen los datos.
    - Visualización de un `v-card` con controles para búsqueda y selección de tipo de vacunación.
    - La interfaz incluye un campo de búsqueda para filtrar vacunaciones y un selector para filtrar por tipo.
    - La tabla muestra información de vacunaciones incluyendo nombre, tipo, fecha y veterinario asignado.

  - **Interactividad**:
    - Permite buscar vacunaciones por nombre mediante una searchbar que se desplega al interactuar con la lupa.
    - Selección de tipos de vacunación (All, Overdue, Noncore, Core) mediante un `v-select`.
    - Menú desplegable para asignar un veterinario a cada vacunación, mostrando un botón para seleccionar el veterinario y un menú para elegir entre los veterinarios disponibles.
    - Los veterinarios que ya estén en un caso estarán disabled para seleccionarlos.

  - **Gestión de Datos**:
    - Los datos de vacunación se filtran en función de la consulta de búsqueda y el tipo seleccionado.
    - Se actualiza el estado de las vacunaciones y los veterinarios asignados mediante acciones en Vuex.
    - Las acciones incluyen la actualización del veterinario asignado y la selección de tipo de vacunación.

---

### PCStatCard

![image](https://github.com/user-attachments/assets/d1dcd2a1-4a5b-4b25-9ffe-d0adf9dd1d57)

- **Interactividad del Gráfico:**
  - Permite seleccionar el rango de datos mediante un `v-select` (Daily, Weekly, Monthly).
  - El gráfico radial se actualiza en función del rango seleccionado.
  - Los datos del gráfico se obtienen y actualizan usando Vuex.
  - Reutilización de componentes.

- **Props y Estado Interno:**
  - **Props:**
    - `label`: El nombre de la estadística.
    - `value`: Valor predeterminado si no hay datos disponibles.
    - `color`: Color del gráfico.
    - `loading`: Indicador de carga de datos.
  - **Estado Interno:**
    - `selectedPeriod`: Rango de tiempo seleccionado.
    - `chartOptions`: Configuración del gráfico radial.

    ---

## Demo
   
![image](https://github.com/user-attachments/assets/f6502cee-733a-4691-bfc0-d69c10447c76)
1920 x 1080
