



document.getElementById("cifrar").addEventListener("click", function(){  
    let offset = parseInt(document.getElementById("spaces").value);
    let string = (document.getElementById("message").value).toUpperCase();  
    document.getElementById("result").innerHTML = cipher.encode(offset, string);
})

document.getElementById("descifrar").addEventListener("click", function(){
    let offset = parseInt(document.getElementById("spaces").value);
    let string = (document.getElementById("message").value).toUpperCase(); 
    document.getElementById("result").innerHTML = cipher.decode(offset, string);
})



