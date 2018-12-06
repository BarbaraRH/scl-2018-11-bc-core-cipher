
document.getElementById("cifrar").addEventListener("click", function(){  
    let offset = parseInt(document.getElementById("spaces").value);
    let string = document.getElementById("message").value;  
    
    for (let i = 0; i < string.length; i++){
        if (string.charCodeAt(i) > 191) {
            alert("No utilizar Ñ ni acentos.");
            return "";
        }           
    }
    if (isNaN(offset) === true) {
        alert ("El valor de número de posiciones de desplazamiento debe ser un número"); 
        return "";
    } else {
        document.getElementById("result").innerHTML = cipher.encode(offset, string);
    }     
})

document.getElementById("descifrar").addEventListener("click", function(){
    let offset = parseInt(document.getElementById("spaces").value);
    let string = document.getElementById("message").value; 

    for (let i = 0; i < string.length; i++){
        if (string.charCodeAt(i) > 191) {
            alert ("No utilizar Ñ ni acentos.");
            return "";
        }
    }
    if (isNaN(offset) === true) {
        alert ("El valor de número de posiciones de desplazamiento debe ser un número"); 
        return "";       
    } else {
    document.getElementById("result").innerHTML = cipher.decode(offset, string);
    }
})




