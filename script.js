// Esta función recibe una cadena como parámetro y devuelve la misma cadena invertida.
function invertirCadena(cadena) {
    // Convertir la cadena en un arreglo de caracteres
    let arregloDeCaracteres = cadena.split('');

    // Invertir el orden de los elementos del arreglo
    let arregloInvertido = arregloDeCaracteres.reverse();

    // Unir los caracteres invertidos en una nueva cadena
    let cadenaInvertida = arregloInvertido.join('');

    // Devolver la cadena invertida
    return cadenaInvertida;
}

// Obtener el botón con el id "verificar" y el elemento donde se mostrará el resultado con el id "resultado"
let verificar = document.getElementById("verificar");
let resultado = document.getElementById("resultado");

// Agregar un evento de click al botón "verificar"
verificar.addEventListener("click", function () {
    // Obtener el valor del input con id "cadenaInput"
    let cadenaOriginal = document.getElementById("cadenaInput").value;

    // Convertir la cadena original a minusculas
    let cadenaMinusculas = cadenaOriginal.toLowerCase();

    // Reemplazar todos los espacios por una cadena vacía
    cadenaMinusculas = cadenaMinusculas.replace(/ /g, '');

    // Reemplazar todos todos los signos de puntuación por una cadena vacía
    cadenaMinusculas = cadenaMinusculas.replace(/[.,'"¿¡!?:;()]/g, '');

    // Reemplazar todos los caracteres acentuados por sus caracteres básicos
    cadenaMinusculas = cadenaMinusculas.normalize("NFD").replace(/\p{Diacritic}/gu, '');
    
    // Obtener la cadena invertida llamando a la función invertirCadena
    let cadenaInvertida = invertirCadena(cadenaMinusculas);

    // Verificar si la cadena original está vacía
    if (cadenaOriginal == "") {
        // Si está vacía, mostrar un mensaje pidiendo que se ingrese una palabra
        resultado.textContent = 'Ingrese una palabra para verificar si es un palíndromo o no'
        resultado.classList.add("with-content");
    }
    // Verificar si la cadena en minusculas es igual a la invertida
    else if (cadenaMinusculas == cadenaInvertida) {
        // Si son iguales, mostrar un mensaje indicando que es un palíndromo
        resultado.innerHTML = 'La palabra "' + cadenaOriginal + '" SI es un palíndromo ya que se lee igual en ambas direcciones';
        resultado.classList.add("with-content");
    }
    // Verificar si la cadena en minusculas no es igual a la invertida
    else if (cadenaMinusculas != cadenaInvertida) {
        // Si no son iguales, mostrar un mensaje indicando que no es un palíndromo
        resultado.innerHTML = 'La palabra "' + cadenaOriginal + '" NO es un palíndromo ya que no se lee igual en ambas direcciones';
        resultado.classList.add("with-content");
    }
});
