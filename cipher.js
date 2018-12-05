window.cipher = {
    encode: (offset, string) => {  
        let result = [];
        for (let i = 0; i < string.length; i++){
            let ascii = string.charCodeAt(i);
            if (ascii >= 65 && ascii<= 90){
                if ((ascii - 65 + offset) >= 0 || ((ascii - 65 + offset) % 26 + 91) > 90){
                    result.push(String.fromCharCode((ascii - 65 + offset) % 26 + 65));
                } else {
                    result.push(String.fromCharCode((ascii - 65 + offset) % 26 + 91));
                }
            } else if (ascii >= 97 && ascii<= 122){
                if ((ascii - 97 + offset) >= 0 || ((ascii - 97 + offset) % 26 + 123) > 122){
                    result.push(String.fromCharCode((ascii - 97 + offset) % 26 + 97));
                } else {
                    result.push(String.fromCharCode((ascii - 97 + offset) % 26 + 123));
                }
            } else if (ascii >= 48 && ascii<= 57) {
                if ((ascii - 48 + offset) >= 0 || ((ascii - 48 + offset) % 10 + 58) > 57){
                    result.push(String.fromCharCode((ascii - 48 + offset) % 10 + 48));
                } else {
                    result.push(String.fromCharCode((ascii - 48 + offset) % 10 + 58));
                }
            } else {
                result.push(string[i]); 
            } 
        } 
        let lettersJoined = result.join("");
        return lettersJoined;                              
    },

    decode: (offset, string) => { 

        let result = [];
        for (let i = 0; i < string.length; i++){
            let ascii = string.charCodeAt(i);
            if (ascii >= 65 && ascii<= 90){
                if ((ascii - 65 - offset) >= 0 || ((ascii - 65 - offset) % 26 + 91) > 90){
                    result.push(String.fromCharCode((ascii - 65 - offset) % 26 + 65));
                } else {
                    result.push(String.fromCharCode((ascii - 65 - offset) % 26 + 91));
                }
            } else if (ascii >= 97 && ascii<= 122){
                if ((ascii - 97 - offset) >= 0 || ((ascii - 97 - offset) % 26 + 123) > 122){
                    result.push(String.fromCharCode((ascii - 97 - offset) % 26 + 97));
                } else {
                    result.push(String.fromCharCode((ascii - 97 - offset) % 26 + 123));
                }
            } else if (ascii >= 48 && ascii<= 57) {
                if ((ascii - 48 - offset) >= 0 || ((ascii - 48 - offset) % 10 + 58) > 57){
                    result.push(String.fromCharCode((ascii - 48 - offset) % 10 + 48));
                } else {
                    result.push(String.fromCharCode((ascii - 48 - offset) % 10 + 58));
                }
            } else {
                result.push(string[i]); 
            } 
        } 
        let lettersJoined = result.join("");
        return lettersJoined;
    }
}





