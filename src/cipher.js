window.cipher = {
// la funcion codifica
  encode: function(text, key){
    let textUpperCase = text.toUpperCase();
    let message = "";
    for (let i = 0, l = textUpperCase.length; i < l; i++) {
      let characterAscii = textUpperCase[i].charCodeAt(0);
      if(characterAscii >= 65 && characterAscii <= 90){

// Posicion en abecedario,suma de posiciones a desplazarce y toma del
// nuevo valor.Se divide entre 26 (n°de letras) y tomo el residuo.
      let valueEncode = (characterAscii + 65 + key) % 26 + 65;
//Volver a convertir el ASCII en letra
      let characterEncode = String.fromCharCode(valueEncode);
      message += characterEncode;
      }
      else{
        message += textUpperCase[i];
      }
    }
 //Retorna de palabra codificada.
      return message;
   },
 //Funcion que decodifica
  decode: function(text, key){

 //Trasformo el texto a mayusculas
      let textUpperCase = text.toUpperCase();

 //Separar letra
      let message = "";

      for (let i = 0, l = textUpperCase.length; i < l; i++) {

 //Trasformo el caracter en ASCII
      let characterAscii = textUpperCase[i].charCodeAt(0);
 //Pregunta si es una letra mayuscula contemplando su codigo ASCII
      if(characterAscii >= 65 && characterAscii <= 90){

 /*Le sumo 65 para tener su posicion en abecedario,
 *le resto el numero de posiciones a desplazarce para que tome el nuevo valor,
 *Lo divido entre 26 y tomo el residuo (se divide entre 26 que es el numero de letras del abecedario para ahorrarse el recorrido atravez de este)*/
      let valueDecode = (characterAscii + 65 - key) % 26 + 65;

 //Volver a convertir el ASCII en letra
      let characterDecode = String.fromCharCode(valueDecode);
      message += characterDecode;
    }
    else{
      message += textUpperCase[i];
    }
  }
     //Retorna la letra encodificada
     return message;
   },
   createCipherWithOffset: function(){

   }
 };
