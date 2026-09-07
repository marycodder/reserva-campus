# ReservaCampus

ReservaCampus es una aplicación frontend para la consulta y reserva de espacios universitarios.

El sistema busca centralizar la información de salas de clases, laboratorios, salas de estudio y espacios de reunión, permitiendo a los usuarios consultar sus características, aplicar filtros y gestionar solicitudes de reserva.

## Problemática

En una universidad existen distintos espacios utilizados por estudiantes, docentes y organizaciones estudiantiles.

Actualmente, consultar la disponibilidad de estos espacios puede resultar difícil, ya que no existe una interfaz centralizada que permita conocer sus características y gestionar solicitudes de reserva.

ReservaCampus propone una interfaz web que permite consultar estos espacios y administrar reservas de manera sencilla.

## Funcionalidades

Actualmente el proyecto contempla:

- Visualización de espacios universitarios.
- Información de cada espacio:
  - Nombre.
  - Torre.
  - Ubicación.
  - Capacidad.
  - Tipo de espacio.
  - Características.
  - Disponibilidad.
- Búsqueda de espacios por nombre.
- Filtro por torre.
- Filtro por tipo de espacio.
- Filtro por capacidad mínima.
- Combinación de múltiples filtros.
- Limpieza de filtros.
- Indicadores de espacios registrados y disponibles.
- Selección de un espacio para realizar una reserva.
- Diseño adaptable a computadores, tablets y teléfonos.
- Creación de reservas.
- Validación de fecha y horario.
- Detección de conflictos entre reservas.
- Visualización de reservas realizadas.
- Cancelación de reservas.
- Actualización dinámica del indicador de reservas activas.

## Tecnologías utilizadas

El proyecto utiliza exclusivamente tecnologías frontend:

- HTML5.
- CSS3.
- Bootstrap 5.
- JavaScript.
- Git.
- GitHub.
- Git Flow.

No utiliza backend, bases de datos ni APIs externas.

Los datos utilizados por la aplicación son simulados mediante arrays y objetos de JavaScript.

## Estructura del proyecto

```text
ReservaCampus/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── assets/
│   └── img/
│
└── README.md

# Ejecución del proyecto
Clonar el repositorio:
git clone https://github.com/marycodder/reserva-campus.git

Entrar al proyecto:
cd reserva-campus

Cambiar a la rama de desarrollo:
git switch develop
Abrir el proyecto en Visual Studio Code:
code .
Abrir index.html utilizando Live Server o directamente desde el navegador.


Flujo de trabajo Git

El proyecto utiliza el siguiente flujo:

feature/*
    ↓
 develop
    ↓
  main

main: versión estable del proyecto.
develop: versión de integración del equipo.
feature/*: desarrollo de funcionalidades específicas.

Antes de comenzar una nueva funcionalidad:

git switch develop
git pull origin develop
git switch -c feature/nombre-funcionalidad

Al terminar una funcionalidad:

git add .
git commit -m "Descripción del cambio"
git push -u origin feature/nombre-funcionalidad

Posteriormente se crea un Pull Request hacia develop.

Diseño responsive:

La interfaz utiliza Bootstrap y CSS personalizado para adaptarse a diferentes tamaños de pantalla.

Se considera su utilización en:

Teléfonos.
Tablets.
Computadores de escritorio.
Paleta de colores

ReservaCampus utiliza una paleta de colores creada por nosotros basada en los siguientes colores:

Azul principal: #00375C
Vino: #5D223B
Celeste: #048ABF
Rojo: #A60321
Oscuro: #201C23

Los colores de mayor intensidad se utilizan principalmente como acentos, estados y elementos de interacción.

Integrantes:
Sebastián Torrealba
Gonzalo Yussef
Mary González


Asignatura:
Desarrollo Web y Móvil
Segundo Semestre 2026