window.cipher = {
    encode: (offset, string) => {  // hay que arreglarlo para que funcione con offset negativo
        if (typeof offset === "number") {;
            let result = "";
            for (let i = 0; i < string.length; i++){ 
                let ascii = string.charCodeAt(i);  
                if (ascii < 126){
                    if (ascii >= 65 && ascii<= 90){
                        result = result + (String.fromCharCode((ascii - 65 + offset) % 26 + 65));
                    } else if (ascii >= 97 && ascii<= 122){
                        result = result + (String.fromCharCode((ascii - 97 + offset) % 26 + 97));
                    } else if (ascii >= 48 && ascii<= 57) {
                        result = result + (String.fromCharCode((ascii - 48 + offset) % 10 + 48));
                    } else {
                        result = result + string[i]; // hay que ver como hacer lo del enter
                    }   
                } else {
                    alert("no utilizar Ñ ni acentos");
                    break;
                }                                             
            }
            return result
        } else {
            alert ("Este valor debe ser un número, no una letra o palabra."); // no esta funcionando el alert
            return " ";
        }  
    },

    decode: (offset, string) => { // falta modificarlo para may, min y numeros del mismo modo que en encode

        let list = [];
        for (let i = 0; i < string.length; i++){
            if (string[i] === " "){
                list.push(" ");
            } else if ((string.charCodeAt(i) - 65 - offset) >= 0 || ((string.charCodeAt(i) - 65 - offset) % 26 + 91) > 90){
                list.push(String.fromCharCode((string.charCodeAt(i) - 65 - offset) % 26 + 65));
            } else {
                list.push(String.fromCharCode((string.charCodeAt(i) - 65 - offset) % 26 + 91));
                }
        }
        let lettersJoined = list.join("");
        return lettersJoined;
    }
}


/* Encode
        if (offset >= 0 && typeof offset === "number"){

            let result = "";

            for (let i = 0; i < string.length; i++){
                if (string[i] === " "){
                    result = result + " ";
                } else if (string[i] === "Ñ"){
                    alert("no utilices la letra Ñ");
                    return " ";
                } else {
                    result = result + (String.fromCharCode((string.charCodeAt(i) - 65 + offset) % 26 + 65));
                }        
            }
        return result
        } else {
            alert ("Este valor debe ser un número mayor a 0.");
            return " ";
        }
*/






