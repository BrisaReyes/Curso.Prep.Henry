// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  let result = Object.keys(objeto);
  let arry = [];

  for(let i = 0; i<result.length; i++){
    arry.push([result[i], objeto[result[i]]]);
  }
  return arry;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let objto = {};

  for(let i= 0; i<string.length; i++){
    if(!objto[string[i]]){
      objto[string[i]] = 1;
    } else{
      objto[string[i]] = objto[string[i]] + 1;
    }
  }
  return objto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let min = "";
  let may = "";

  for(let i = 0; i < s.length; i++){
    if(s[i].toUpperCase() === s[i]){
      may = may + s[i];
    } else{
      min = min + s[i];
    }
  }
  return may + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let frase = str.split(" ");
  let mirror = "";

  for(i = 0; i<frase.length; i++){
    if(i === frase.length -1){
      let tp = frase[i].split("").reverse().join("");
      mirror = mirror + tp;
   } else{
    let tp = frase[i].split("").reverse().join("");
    mirror = mirror + tp + " ";
   }

  }
  return mirror;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  numero = numero.toString();

  if(asAmirror(numero) === numero){
    return "Es capicua"
  } else{
    return "No es capicua"
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let ncadena = "";

  for(let i = 0; i<cadena.length; i++){
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
      ncadena = ncadena + cadena[i];
    }
  }
  return ncadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let unArray = arr.slice(0,1);
  let arrayIzq;
  let arrayDer;

  for( let i = 0; i< arr.length; i++){

    for(let j = 0; i<unArray; i++){
      if(unArray[j].length > arr[i].length){
        arrayIzq = arrayDer.slice(0,j);
        arrayDer = arrayIzq.slice(j);

        unArray = arrayIzq.concat(arr[i].concat(arrayDer));
        break;
      }
      if(j === unArray.length - 1){
        unArray.push(arr[i]);
        break;
      }
    }
  }
  return unArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let arrayInteraccion = [];

  for( let i = 0; i<arreglo1.length; i++){

    for( let j = 0; j<arreglo2.length; j++){
      if(arreglo2[j] === arreglo1[i]){
        arrayInteraccion.push(arreglo2[j])
        break;
      }
    }
  }
  return arrayInteraccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

