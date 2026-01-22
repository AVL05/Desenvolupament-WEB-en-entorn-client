export function formatoMoneda(monto) {
  const number = Number(monto);

  return number.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
}

const opciones = {
  year: "numeric",
  month: "long",
  day: "2-digit",
};

export const generarId = () => {
  const fecha = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return fecha + random;
};

export const formatearFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString("es-ES", opciones);
};
