// ==================================================
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
        nombre: "Laboratorio de Quimica Q-202",
        torre: "B",
        ubicacion: "Segundo piso",
        capacidad: 25,
        tipo: "Laboratorio",
        caracteristicas: ["Equipo de quimica", "Pizarra", "Enchufes"],
        disponible: true
    },
    {
        id: 5,
        nombre: "Sala de Reunion VM - 516",
        torre: "C",
        ubicacion: "Quinto piso",
        capacidad: 15,
        tipo: "Sala de reunion",
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
        caracteristicas: ["3 mesas con sillas", "Sillas", "Muro de escalar", "Parrilla", "area de barbecue"],
        disponible: true
    },
    {
        id: 7,
        nombre: "Auditorio Rojo",
        torre: "A",
        ubicacion: "Primer piso",
        capacidad: 120,
        tipo: "Auditorio",
        caracteristicas: ["Proyector", "Sistema de audio", "Micrófonos", "Butacas"],
        disponible: true
    },

        {
        id: 8,
        nombre: "Laboratorio de Computación INF-210",
        torre: "B",
        ubicacion: "Segundo piso",
        capacidad: 35,
        tipo: "Laboratorio",
        caracteristicas: ["35 computadores", "Proyector", "Internet", "Aire acondicionado"],
        disponible: true
    },

        {
        id: 9,
        nombre: "Sala de Innovación y Proyectos",
        torre: "A",
        ubicacion: "Cuarto piso",
        capacidad: 25,
        tipo: "Sala de reunión",
        caracteristicas: ["Pizarra digital", "Mesa colaborativa", "Pantalla"],
        disponible: true
    },


    {
        id: 10,
        nombre: "Laboratorio Electrónica E-105",
        torre: "C",
        ubicacion: "Primer piso",
        capacidad: 20,
        tipo: "Laboratorio",
        caracteristicas: ["Mesones de trabajo", "Instrumentos electrónicos", "Enchufes"],
        disponible: true
    },

        {
        id: 11,
        nombre: "Espacio Cowork Estudiantil",
        torre: "D",
        ubicacion: "Primer piso",
        capacidad: 30,
        tipo: "Cowork",
        caracteristicas: ["Mesas compartidas", "Internet", "Enchufes", "Zona de descanso"],
        disponible: true
    },

        {
        id: 12,
        nombre: "Sala de Innovación y Proyectos",
        torre: "A",
        ubicacion: "Cuarto piso",
        capacidad: 25,
        tipo: "Sala de reunión",
        caracteristicas: ["Pizarra digital", "Mesa colaborativa", "Pantalla"],
        disponible: true
    },
];
 
 
// ==================================================
// RESERVAS
// Aqui se van guardando las reservas que el usuario va creando desde el formulario
// ==================================================
 
let reservas = [];
 
let contadorReservaId = 1;
 
 
// ==================================================
// REFERENCIAS AL DOM
// ==================================================
 
const contenedorEspacios = document.querySelector("#contenedorEspacios");
 
const totalEspacios = document.querySelector("#totalEspacios");
 
const espaciosDisponibles = document.querySelector("#espaciosDisponibles");
 
const reservasActivas = document.querySelector("#reservasActivas");
 
const buscarEspacio = document.querySelector("#buscarEspacio");
const filtroTorre = document.querySelector("#filtroTorre");
const filtroTipo = document.querySelector("#filtroTipo");
const filtroCapacidad = document.querySelector("#filtroCapacidad");
const btnLimpiarFiltros = document.querySelector("#btnLimpiarFiltros");
 
const formReserva = document.querySelector("#formReserva");
const reservaEspacio = document.querySelector("#reservaEspacio");
const reservaFecha = document.querySelector("#reservaFecha");
const horaInicio = document.querySelector("#horaInicio");
const horaFin = document.querySelector("#horaFin");
const nombreSolicitante = document.querySelector("#nombreSolicitante");
const motivoReserva = document.querySelector("#motivoReserva");
const mensajeReserva = document.querySelector("#mensajeReserva");
 
const tablaReservas = document.querySelector("#tablaReservas");
 
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
                        <strong>Ubicacion:</strong>
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
                        Caracteristicas
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
 
    const cantidadReservasActivas = reservas.filter(
        (reserva) => reserva.estado !== "cancelada"
    ).length;
 
    reservasActivas.textContent = cantidadReservasActivas;
}
 
// ==================================================
// Aplicar filtros de busqueda
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
// MOSTRAR RESERVAS
// ==================================================
 
function mostrarReservas() {
 
    tablaReservas.innerHTML = "";
 
    if (reservas.length === 0) {
 
        tablaReservas.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted">
                    Aun no tienes reservas registradas.
                </td>
            </tr>
        `;
 
        return;
    }
 
    reservas.forEach((reserva) => {
 
        const espacio = espacios.find(
            (espacio) => espacio.id === reserva.espacioId
        );
 
        const fila = document.createElement("tr");
 
        fila.innerHTML = `
            <td>${espacio ? espacio.nombre : "Espacio no encontrado"}</td>
            <td>${reserva.fecha}</td>
            <td>${reserva.horaInicio} - ${reserva.horaFin}</td>
            <td>${reserva.solicitante}</td>
            <td>
                <span class="badge estado-${reserva.estado === "confirmada" ? "confirmada" : "cancelada"}">
                    ${reserva.estado}
                </span>
            </td>
            <td>
                <button
                    type="button"
                    class="btn btn-sm btn-outline-danger btnCancelarReserva"
                    data-id="${reserva.id}"
                >
                    Cancelar
                </button>
            </td>
        `;
 
        tablaReservas.appendChild(fila);
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
// CANCELAR RESERVA
// ==================================================
 
tablaReservas.addEventListener("click", (event) => {
 
    const botonCancelar = event.target.closest(".btnCancelarReserva");
 
    if (!botonCancelar) {
        return;
    }
 
    const idReserva = Number(botonCancelar.dataset.id);
 
    const reserva = reservas.find(
        (reserva) => reserva.id === idReserva
    );
 
    if (!reserva) {
        return;
    }
 
    reserva.estado = "cancelada";

    const espacio = espacios.find(
        (espacio) => espacio.id === reserva.espacioId
    );

    if (espacio) {
        espacio.disponible = true;
    }
 
    mostrarReservas();
 
    actualizarIndicadores();

    mostrarEspacios(espacios);

    cargarEspaciosFormulario();
});
 
 
// ==================================================
// ENVIAR FORMULARIO DE RESERVA
// ==================================================
 
formReserva.addEventListener("submit", (event) => {
 
    event.preventDefault();
    event.stopPropagation();
 
    // Validacion extra: la hora de fin debe ser mayor que la de inicio
    horaFin.setCustomValidity("");
 
    if (horaInicio.value && horaFin.value && horaFin.value <= horaInicio.value) {
        horaFin.setCustomValidity("La hora de termino debe ser mayor a la hora de inicio.");
    }

    // Validacion extra: el nombre solo debe contener letras, ñ y acentos
    nombreSolicitante.setCustomValidity("");

    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!nombreValido.test(nombreSolicitante.value.trim())) {
        nombreSolicitante.setCustomValidity(
            "El nombre solo puede contener letras, espacios, ñ y acentos."
        );
    }
 
    // Si el formulario no es valido (campos vacios o la validacion custom de arriba)
    if (!formReserva.checkValidity()) {
 
        formReserva.classList.add("was-validated");
 
        mensajeReserva.innerHTML = `
            <div class="alert alert-danger">
                Revisa los campos marcados en rojo antes de continuar.
            </div>
        `;
 
        return;
    }
 
    const nuevaReserva = {
        id: contadorReservaId,
        espacioId: Number(reservaEspacio.value),
        fecha: reservaFecha.value,
        horaInicio: horaInicio.value,
        horaFin: horaFin.value,
        solicitante: nombreSolicitante.value,
        motivo: motivoReserva.value,
        estado: "confirmada"
    };
 
    reservas.push(nuevaReserva);

    const espacioReservado = espacios.find(
        (espacio) => espacio.id === nuevaReserva.espacioId
    );

    if (espacioReservado) {
        espacioReservado.disponible = false;
    }
 
    contadorReservaId++;
 
    formReserva.reset();
    formReserva.classList.remove("was-validated");
 
    mensajeReserva.innerHTML = `
        <div class="alert alert-success">
            Reserva registrada correctamente.
        </div>
    `;
 
    mostrarReservas();
 
    actualizarIndicadores();

    mostrarEspacios(espacios);

    cargarEspaciosFormulario();
});
 
 
// ==================================================
// INICIAR INTERFAZ
// ==================================================
 
mostrarEspacios(espacios);
 
actualizarIndicadores();
 
cargarEspaciosFormulario();
 
mostrarReservas();
