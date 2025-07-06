// Método JS para establecer las opciones de la fecha y hora a mostrar en el sitio
function actualizarFechaHora() {
  const opciones = {
  timeZone: 'America/Montevideo',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

//Asigna a constante la hora de montevideo y la muestra en el div que tiene la ID fechaHora
const ahora = new Date().toLocaleString('es-UY', opciones);
  document.getElementById('fechaHora').textContent = 'Montevideo: ' + ahora;
}

// Actualiza cada segundo
actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);