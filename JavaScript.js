let indice = 0;
let letras = document.querySelectorAll(".letra");
let preguntas = [
  "Empieza por A: País europeo",
  "Empieza por B: Objeto para sentarse",
  "Empieza por C: Bebida caliente",
  "Empieza por D: Día de la semana ",
  "Empieza por E: Animal con trompa",
  "Empieza por F: similar al lodo",
  "Empieza por G: Animal que maúlla",
  "Empieza por H: sinonimo de oleada",
  "Empieza por I: País del mediterraneo",
  "Empieza por J: Bebida de naranja",
  "Empieza por K: unidad de medida para el peso",
  "Empieza por L: Da luz",
  "Empieza por M: Animal grande extinguido",
  "Empieza por N: Lo contrario de sí",
  "Contiene la Ñ: pais caracteristico de esta letra",
  "Contiene la O: Forma redonda",
  "Contiene la P: Sirve para escribir",
  "Empieza por Q: lacteo",
  "Empieza por R: Color de la sangre",
  "Empieza por S: Animal que se arrastra",
  "Empieza por T: Bebida caliente",
  "Empieza por U: Fruta morada",
  "Contiene la V: tipo de animal que vuela",
  "Empieza por X: instrumento musical",
  "Empieza por Y: juguete con cuerda",
  "Empieza por Z: Animal con rayas"
]; 
let respuestasCorrectas = [
  "alemania",       // para A
  "butaca",       // para B
  "cafe",        // para C
  "domingo",      // para D
  "elefante",    // para E
  "fango",     // para F (sin tilde para evitar líos)
  "gato",        // para G
  "horda",       // para H
  "italia",      // para I
  "jugo",        // para J
  "kilo",        // para K
  "linterna",    // para L
  "mamut",       // para M
  "no",          // para N
  "españa",          // para Ñ
  "circulo",     // para O
  "lapiz",       // para P
  "queso",       // para Q
  "rojo",        // para R
  "serpiente",   // para S
  "te",          // para T
  "uva",         // para U
  "ave",         // para V
  "xilofono",    // para X
  "yoyo",           // para Y
  "zebra"        // para Z
]; 
letras.forEach((letra, i) => {
  let angulo = (360 / letras.length) * i - 90;

  letra.style.transform = 
    "rotate(" + angulo + "deg) translate(150px) rotate(" + (-angulo) + "deg)";
});

function normalizar(texto) {
  return texto
    .toLowerCase()
    .trim()
    .normalize("NFD") // separa letras y tildes
    .replace(/[\u0300-\u036f]/g, ""); // elimina tildes 
}
function activarLetra() {
  letras.forEach(l => l.classList.remove("activa"));
  letras[indice].classList.add("activa");
   document.getElementById("pregunta").textContent = preguntas[indice];
}

function comprobar() {
  let respuesta = normalizar(document.getElementById("respuesta").value);
  let correcta = normalizar(respuestasCorrectas[indice]);
  let mensajeDiv = document.getElementById("mensaje");
  if(respuesta === correcta) {
    mensajeDiv.textContent = "¡Correcto! ✅";
    letras[indice].style.backgroundColor = "green";
  } else {
  mensajeDiv.textContent = "Incorrecto ❌, la respuesta era: " + correcta;
    letras[indice].style.backgroundColor = "red";
  }
  indice++;
  if (indice >= letras.length) indice = 0;

  activarLetra();  
  //limpia el input
  document.getElementById("respuesta").value = "";
  setTimeout(() => { mensajeDiv.textContent = ""; }, 4000);
}

function pasar() {
  indice++;
  if (indice >= letras.length) indice = 0;

  activarLetra();
}

// activar la primera al cargar
activarLetra();
