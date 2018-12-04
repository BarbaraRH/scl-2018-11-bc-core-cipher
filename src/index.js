
document.getElementById("cifrar").addEventListener("click", function(){  
    let offset = parseInt(document.getElementById("spaces").value);
    let string = document.getElementById("message").value;  
    
    for (let i = 0; i < string.length; i++){
        if (string.charCodeAt(i) > 126) {
            alert ("no utilizar Ñ ni acentos");
            return "";
        }
    }
    if (isNaN(offset) === true) {
        alert ("Este valor debe ser un número, no una letra o palabra."); 
        return "A";        
    } else {
        document.getElementById("result").innerHTML = cipher.encode(offset, string);
    }     
})

document.getElementById("descifrar").addEventListener("click", function(){
    let offset = parseInt(document.getElementById("spaces").value);
    let string = (document.getElementById("message").value).toUpperCase(); 
    document.getElementById("result").innerHTML = cipher.decode(offset, string);
})



