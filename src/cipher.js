window.cipher = {
    encode: (offset, string) => {  
        let result = [];
        for (let i = 0; i < string.length; i++){ 
            let ascii = string.charCodeAt(i);  
            if (ascii >= 65 && ascii<= 90){
                if (offset >= 0) {
                    result.push(String.fromCharCode((ascii - 65 + offset) % 26 + 65));
                } else {
                    if ((ascii - 65 + offset) >= 0 || ((ascii - 65 + offset) % 26 + 91) > 90) {
                        result.push(String.fromCharCode((ascii - 65 + offset) % 26 + 65));
                    } else {
                        result.push(String.fromCharCode((ascii - 65 + offset) % 26 + 91));
                    }
                }                
            } else if (ascii >= 97 && ascii<= 122){
                if (offset >= 0) {
                    result.push(String.fromCharCode((ascii - 97 + offset) % 26 + 97));
                } else {
                    if ((ascii - 97 + offset) >= 0 || ((ascii - 97 + offset) % 26 + 123) > 122){
                        result.push(String.fromCharCode((ascii - 97 + offset) % 26 + 97));
                    } else {
                        result.push(String.fromCharCode((ascii - 97 + offset) % 26 + 123));
                    }
                }                
            } else if (ascii >= 48 && ascii<= 57) {
                if (offset >= 0){
                    result.push(String.fromCharCode((ascii - 48 + offset) % 10 + 48));
                } else {
                    if ((ascii - 48 + offset) >= 0 || ((ascii - 48 + offset) % 10 + 58) > 57){
                        result.push(String.fromCharCode((ascii - 48 + offset) % 10 + 48));
                    } else {
                        result.push(String.fromCharCode((ascii - 48 + offset) % 10 + 58));
                    }
                }                                    
            } else {
                result.push(string[i]); 
            }                                                       
        }
        let resultJoined = result.join("");
        return resultJoined                      
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


/*

window.cipher = {
    encode: (offset, string) => {  // hay que arreglarlo para que funcione con offset negativo
        let result = [];
        for (let i = 0; i < string.length; i++){ 
            let ascii = string.charCodeAt(i);  
            if (ascii >= 65 && ascii<= 90){
                result.push(String.fromCharCode((ascii - 65 + offset) % 26 + 65));
            } else if (ascii >= 97 && ascii<= 122){
                result.push(String.fromCharCode((ascii - 97 + offset) % 26 + 97));
            } else if (ascii >= 48 && ascii<= 57) {
                result.push(String.fromCharCode((ascii - 48 + offset) % 10 + 48));                    
            } else if (ascii === 13){   // hay que ver como hacer lo del enter                        
                result.push(string[i]);
            } 
            else {
                result.push(string[i]); 
            }                                                       
        }
        let resultJoined = result.join("");
        return resultJoined                      
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

*/





