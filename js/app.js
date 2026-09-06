// ==================================================
// RESERVACAMPUS
// Datos iniciales de espacios universitarios
// ==================================================


const espacios = [
    {
        id: 1,
        nombre: "Sala VM-201",
        torre: "A",
        ubicacion: "Segundo piso",
        capacidad: 40,
        tipo: "Sala de clases",
        caracteristicas: ["Proyector", "Pizarra", "Aire acondicionado"],
        disponible: true
    },
    {
        id: 2,
        nombre: "Laboratorio INF-306",
        torre: "B",
        ubicacion: "Tercer piso",
        capacidad: 30,
        tipo: "Laboratorio",
        caracteristicas: ["30 computadores", "Proyector", "Pizarra"],
        disponible: true
    },
    {
        id: 3,
        nombre: "Box de Estudio 18",
        torre: "B",
        ubicacion: "-1",
        capacidad: 8,
        tipo: "Box de estudio",
        caracteristicas: ["Mesa grupal", "Enchufes", "Pizarra"],
        disponible: true
    },
    {
        id: 4,
        nombre: "Laboratorio de Química Q-202",
        torre: "B",
        ubicacion: "Segundo piso",
        capacidad: 25,
        tipo: "Laboratorio",
        caracteristicas: ["Equipo de química", "Pizarra", "Enchufes"],
        disponible: false
    },
    {
        id: 5,
        nombre: "Sala de Reunión VM - 516",
        torre: "C",
        ubicacion: "Quinto piso",
        capacidad: 15,
        tipo: "Sala de reunión",
        caracteristicas: ["Pantalla", "Mesa de reuniones", "Enchufes"],
        disponible: true
    },
    {
        id: 6,
        nombre: "Quincho Recreativo ",
        torre: "C",
        ubicacion: "Tercer piso",
        capacidad: 35,
        tipo: "Quincho recreativo",
        caracteristicas: ["3 mesas con sillas", "Sillas", "Muro de escalar", "Parrilla", "Área de barbecue"],
        disponible: false
    }
];


// ==================================================
// REFERENCIAS AL DOM
// ==================================================

const contenedorEspacios = document.querySelector("#contenedorEspacios");

const totalEspacios = document.querySelector("#totalEspacios");

const espaciosDisponibles = document.querySelector("#espaciosDisponibles");

const buscarEspacio = document.querySelector("#buscarEspacio");
const filtroTorre = document.querySelector("#filtroTorre");
const filtroTipo = document.querySelector("#filtroTipo");
const filtroCapacidad = document.querySelector("#filtroCapacidad");
const btnLimpiarFiltros = document.querySelector("#btnLimpiarFiltros");

// ==================================================
// MOSTRAR ESPACIOS
// ==================================================

function mostrarEspacios(lista) {

    contenedorEspacios.innerHTML = "";

    if (lista.length === 0) {

        contenedorEspacios.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center">
                    No se encontraron espacios.
                </div>
            </div>
        `;

        return;
    }


    lista.forEach((espacio) => {

        const columna = document.createElement("div");

        columna.className = "col-12 col-md-6 col-lg-4";


        const estado = espacio.disponible
            ? '<span class="badge estado-confirmada">Disponible</span>'
            : '<span class="badge estado-cancelada">No disponible</span>';


        const caracteristicas = espacio.caracteristicas
            .map((caracteristica) => `<li>${caracteristica}</li>`)
            .join("");


        columna.innerHTML = `
            <article class="card h-100">

                <div class="card-body d-flex flex-column">

                    <div class="d-flex justify-content-between align-items-start gap-2 mb-3">

                        <h3 class="card-title h5 mb-0">
                            ${espacio.nombre}
                        </h3>

                        ${estado}

                    </div>


                    <p class="card-text mb-1">
                        <strong>Torre:</strong>
                        ${espacio.torre}
                    </p>

                    <p class="card-text mb-1">
                        <strong>Ubicación:</strong>
                        ${espacio.ubicacion}
                    </p>

                    <p class="card-text mb-1">
                        <strong>Capacidad:</strong>
                        ${espacio.capacidad} personas
                    </p>

                    <p class="card-text mb-3">
                        <strong>Tipo:</strong>
                        ${espacio.tipo}
                    </p>


                    <h4 class="h6">
                        Características
                    </h4>

                    <ul class="mb-4">
                        ${caracteristicas}
                    </ul>


                    <button
                        type="button"
                        class="btn btn-primary mt-auto btnReservarEspacio"
                        data-id="${espacio.id}"
                        ${espacio.disponible ? "" : "disabled"}
                    >
                        ${espacio.disponible ? "Reservar" : "No disponible"}
                    </button>

                </div>

            </article>
        `;


        contenedorEspacios.appendChild(columna);
    });
}

// ==================================================
// ACTUALIZAR INDICADORES
// ==================================================

function actualizarIndicadores() {

    totalEspacios.textContent = espacios.length;

    const cantidadDisponibles = espacios.filter(
        (espacio) => espacio.disponible
    ).length;

    espaciosDisponibles.textContent = cantidadDisponibles;
}

// ==================================================
// Aplicar filtros de búsqueda
// ==================================================


function aplicarFiltros() {

    const textoBusqueda = buscarEspacio.value
        .trim()
        .toLowerCase();

    const torreSeleccionada = filtroTorre.value;
    const tipoSeleccionado = filtroTipo.value;
    const capacidadMinima = Number(filtroCapacidad.value);

    const espaciosFiltrados = espacios.filter((espacio) => {

        const coincideNombre =
            espacio.nombre.toLowerCase().includes(textoBusqueda);

        const coincideTorre =
            torreSeleccionada === "Todas" ||
            espacio.torre === torreSeleccionada;

        const coincideTipo =
            tipoSeleccionado === "Todos" ||
            espacio.tipo === tipoSeleccionado;

        const coincideCapacidad =
            capacidadMinima === 0 ||
            espacio.capacidad >= capacidadMinima;

        return (
            coincideNombre &&
            coincideTorre &&
            coincideTipo &&
            coincideCapacidad
        );
    });

    mostrarEspacios(espaciosFiltrados);
}


function cargarEspaciosFormulario() {

    reservaEspacio.innerHTML = `
        <option value="">
            Seleccione un espacio
        </option>
    `;

    espacios.forEach((espacio) => {

        if (espacio.disponible) {

            const opcion = document.createElement("option");

            opcion.value = espacio.id;
            opcion.textContent = espacio.nombre;

            reservaEspacio.appendChild(opcion);
        }
    });
}


// ==================================================
// EVENTOS
// ==================================================


buscarEspacio.addEventListener("input", aplicarFiltros);

filtroTorre.addEventListener("change", aplicarFiltros);

filtroTipo.addEventListener("change", aplicarFiltros);

filtroCapacidad.addEventListener("input", aplicarFiltros);


// ==================================================
// LIMPIAR LOS FILTROS
// ==================================================

btnLimpiarFiltros.addEventListener("click", () => {

    buscarEspacio.value = "";
    filtroTorre.value = "Todas";
    filtroTipo.value = "Todos";
    filtroCapacidad.value = "";

    mostrarEspacios(espacios);
});

contenedorEspacios.addEventListener("click", (event) => {

    const botonReservar = event.target.closest(".btnReservarEspacio");

    if (!botonReservar) {
        return;
    }

    const idEspacio = Number(botonReservar.dataset.id);

    const espacioSeleccionado = espacios.find(
        (espacio) => espacio.id === idEspacio
    );

    if (!espacioSeleccionado) {
        return;
    }

    reservaEspacio.value = espacioSeleccionado.id;

    document.querySelector("#reservar").scrollIntoView({
        behavior: "smooth"
    });
});


// ==================================================
// INICIAR INTERFAZ
// ==================================================

mostrarEspacios(espacios);

actualizarIndicadores();

cargarEspaciosFormulario();