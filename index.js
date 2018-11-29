/* Acá va tu código */

document.getElementById("cifrar").addEventListener("click", function(){
    let offset = parseInt(document.getElementById("spaces").value);
    let string = (document.getElementById("message").value).toUpperCase();
    document.getElementById("result").innerHTML = "Mensaje cifrado: " + cipher.encode(offset, string);
})

document.getElementById("descifrar").addEventListener("click", function(){
    let offset = parseInt(document.getElementById("spaces").value);
    let string = (document.getElementById("message").value).toUpperCase();
    document.getElementById("result").innerHTML = "Mensaje descifrado: " + cipher.decode(offset, string);
})



/*
const cifrar = document.getElementById('cifrar').value;
const descifrar = document.getElementById('descifrar').value;


cifrar.addEventListener("Click", () => {
    let offset = parseInt(document.getElementById("spaces").value);
    let string = (document.getElementById("message").value).toUpperCase();
    cifrar.innerHTML = cipher.encode(offset, string);
})
*/

/*



cifrar.addEventListener("Click", () => {
    let offset = parseInt(document.getElementById("spaces").value);
    let string = (document.getElementById("message").value).toUpperCase();
    cifrar.innerHTML = cipher.encode(offset, string);
})

*/