const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const mensaje = document.getElementById("mensaje");
const btnVerificar = document.getElementById("verificar");
const btnCerrar = document.getElementById("cerrar");

// Botones
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnSigno = document.getElementById("btnSigno");
const btnCalificacion = document.getElementById("btnCalificacion");
const btnMayorDos = document.getElementById("btnMayorDos");
const btnClasificarEdad = document.getElementById("btnClasificarEdad");
const btnContarHasta = document.getElementById("btnContarHasta");
const btnSumarHasta = document.getElementById("btnSumarHasta");
const btnTabla = document.getElementById("btnTabla");
const btnPares = document.getElementById("btnPares");

let funcionEjercicioActual = null;

function abrirModal(titulo, descripcion, funcion) {
  tituloModal.textContent = titulo;
  ejercicioModal.textContent = descripcion;
  respuesta.value = "";
  mensaje.textContent = "";
  funcionEjercicioActual = funcion;
  modal.classList.add("activarModal");
}

btnCerrar.addEventListener("click", () => {
  modal.classList.remove("activarModal");
});

btnVerificar.addEventListener("click", () => {
  if (funcionEjercicioActual) {
    funcionEjercicioActual();
  }
});

// ----- Funciones condicionales -----
function verificarParImpar() {
  const num = parseInt(respuesta.value);
  if (isNaN(num)) return mensaje.textContent = "Ingresa un número válido.";
  mensaje.textContent = (num % 2 === 0) ? "Es PAR" : "Es IMPAR";
}

function verificarEdad() {
  const edad = parseInt(respuesta.value);
  if (isNaN(edad)) return mensaje.textContent = "Edad no válida.";
  mensaje.textContent = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
}

function verificarSigno() {
  const num = parseFloat(respuesta.value);
  if (isNaN(num)) return mensaje.textContent = "Ingresa un número válido.";
  if (num > 0) mensaje.textContent = "Positivo";
  else if (num < 0) mensaje.textContent = "Negativo";
  else mensaje.textContent = "Cero";
}

function verificarCalificacion() {
  const nota = parseInt(respuesta.value);
  if (isNaN(nota) || nota < 0 || nota > 100) {
    return mensaje.textContent = "Calificación inválida (0-100)";
  }
  mensaje.textContent = nota >= 60 ? "¡Aprobado!" : "Reprobado";
}

function numeroMayor() {
  const nums = respuesta.value.split(",");
  const a = parseFloat(nums[0]), b = parseFloat(nums[1]);
  if (isNaN(a) || isNaN(b)) return mensaje.textContent = "Ingresa dos números separados por coma.";
  mensaje.textContent = (a > b) ? `${a} es mayor` : (b > a) ? `${b} es mayor` : "Son iguales";
}

function clasificarEdad() {
  const edad = parseInt(respuesta.value);
  if (isNaN(edad)) return mensaje.textContent = "Edad inválida.";
  if (edad <= 12) mensaje.textContent = "Niño";
  else if (edad <= 17) mensaje.textContent = "Adolescente";
  else if (edad <= 59) mensaje.textContent = "Adulto";
  else mensaje.textContent = "Adulto mayor";
}

// ----- Funciones bucles -----
function contarHastaNumero() {
  const n = parseInt(respuesta.value);
  if (isNaN(n) || n < 1) return mensaje.textContent = "Número no válido.";
  let salida = "";
  for (let i = 1; i <= n; i++) salida += i + " ";
  mensaje.textContent = salida;
}

function sumarHastaN() {
  const n = parseInt(respuesta.value);
  if (isNaN(n) || n < 1) return mensaje.textContent = "Número no válido.";
  let suma = 0;
  for (let i = 1; i <= n; i++) suma += i;
  mensaje.textContent = `Suma: ${suma}`;
}

function tablaMultiplicar() {
  const n = parseInt(respuesta.value);
  if (isNaN(n)) return mensaje.textContent = "Número inválido.";
  let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += `${n} x ${i} = ${n * i}\n`;
  }
  alert(tabla);
}

function contarPares() {
  const n = parseInt(respuesta.value);
  if (isNaN(n) || n < 1) return mensaje.textContent = "Número inválido.";
  let salida = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) salida += i + " ";
  }
  mensaje.textContent = salida;
}

// ----- Conexión botones -----
btnParImpar.addEventListener("click", () => abrirModal("Par o Impar", "Ingresa un número", verificarParImpar));
btnMayorEdad.addEventListener("click", () => abrirModal("Mayor de Edad", "Ingresa tu edad", verificarEdad));
btnSigno.addEventListener("click", () => abrirModal("Signo del número", "Ingresa un número", verificarSigno));
btnCalificacion.addEventListener("click", () => abrirModal("Calificación", "Ingresa tu nota (0-100)", verificarCalificacion));
btnMayorDos.addEventListener("click", () => abrirModal("Número mayor", "Ingresa dos números separados por coma", numeroMayor));
btnClasificarEdad.addEventListener("click", () => abrirModal("Clasificación de edad", "Ingresa tu edad", clasificarEdad));

btnContarHasta.addEventListener("click", () => abrirModal("Contar hasta N", "Ingresa un número", contarHastaNumero));
btnSumarHasta.addEventListener("click", () => abrirModal("Suma hasta N", "Ingresa un número", sumarHastaN));
btnTabla.addEventListener("click", () => abrirModal("Tabla de multiplicar", "Ingresa un número", tablaMultiplicar));
btnPares.addEventListener("click", () => abrirModal("Pares hasta N", "Ingresa un número", contarPares));

  