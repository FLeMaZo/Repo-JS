function validarStickers() {
  const cantidadUno =
    parseInt(document.querySelector("#cantidadUno").value) || 0;
  const cantidadDos =
    parseInt(document.querySelector("#cantidadDos").value) || 0;
  const cantidadTres =
    parseInt(document.querySelector("#cantidadTres").value) || 0;

  const total = cantidadUno + cantidadDos + cantidadTres;

  const resultado = document.querySelector("#resultado");

  if (total > 10) {
    resultado.textContent = "¡Llevas demasiados stickers!";
  } else {
    resultado.textContent = `Llevas ${total} stickers`;
  }
}
