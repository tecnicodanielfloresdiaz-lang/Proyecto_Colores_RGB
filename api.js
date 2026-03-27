
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');


/*
if (!inputRojo) {
  console.error("❌ No se encontró el input rojo. Revisa el ID en HTML");
}
  */ 

const textRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;
//Actulizar el texto de los parrafos
textRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul){
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}
//Actualizar Red (Rojo)
inputRojo.addEventListener('change', (e)=>{
  rojo = e.target.value;
  textRojo.innerText = rojo;
  actualizarColor(rojo,verde,azul);
});
//Actualizar Green (Verde)
inputVerde.addEventListener('change', (e)=>{
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo,verde,azul);
});
//Actualizar Blue (Azul)
inputAzul.addEventListener('change', (e)=>{
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo,verde,azul);
});