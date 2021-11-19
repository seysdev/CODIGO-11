// SESSIONSTORAGE
// La informacion persiste solo en la pestaña actual
sessionStorage.setItem('clave', 1234); // setear un valor
console.log(sessionStorage.getItem('clave')); // obtener el valor
console.log(sessionStorage);
sessionStorage.removeItem('clave'); // remover el valor
console.log(sessionStorage);

// LOCALSTORAGE
// La informacion persiste aunque la pestaña se cierre
localstorage.setItem('clave', 1234); // setear un valor
console.log(localstorage.getItem('clave')); // obtener el valor
console.log(localstorage);
localstorage.removeItem('clave'); // remover el valor
console.log(localstorage);

// JSON STRINGIFY = GUARDA EN FORMATO JSON
const numeros = [0, 1, 2, 3, 4];
sessionStorage.setItem('numeros', JSON.stringify(numeros)); // guardo en json
JSON.parse(sessionStorage.getItem('numeros')); // lo convierte a array

const objeto = { name: 'sebastian' };
sessionStorage.setItem('objeto', JSON.stringify(objeto)); // guardo en json
JSON.parse(sessionStorage.getItem('objeto')); // lo convierte a objeto
