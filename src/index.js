 //Llamar elementos
const text = document.getElementById('text');
const key = document.getElementById('key');
const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const clear = document.getElementById('clear');
const message = document.getElementById('message');

//Evento click para llamar a la funcion encrypt/Decrypt
encode.addEventListener("click", () => {
  message.value = window.cipher.encode(text.value, parseInt(key.value));
});
decode.addEventListener("click", () => {
  message.value = window.cipher.decode(text.value, parseInt(key.value));
});
clear.addEventListener('click', () => {
    key.value = "1";
    text.value = "";
    message.value ="";
});
