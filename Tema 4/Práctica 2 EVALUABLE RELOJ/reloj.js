function mostrarReloj(){
    let tiempo = new Date();
    let hora = tiempo.toLocaleTimeString("es-ES");
    let fecha = tiempo.toLocaleDateString("es-ES", { weekday: 'short', day: 'numeric', month: 'short' });
    
    document.getElementById('hora').textContent = hora;
    document.getElementById('fecha').textContent = fecha;
    
    document.getElementById('contenedor').classList.toggle('animar');
}

setInterval(mostrarReloj, 1000);
