window.cipher = {
    encode: (offset, string) => {  
        let result = [];
        for (let i = 0; i < string.length; i++){
            let ascii = string.charCodeAt(i);            
            if (ascii >= 65 && ascii<= 90){
                let asciiTransformedUpp = (ascii - 65 + offset) % 26 + 65;
                if (asciiTransformedUpp >= 65){
                    result.push(String.fromCharCode(asciiTransformedUpp));
                } else {
                    result.push(String.fromCharCode(asciiTransformedUpp + 26));
                }
            } else if (ascii >= 97 && ascii <= 122){
                let asciiTransformedLow = (ascii - 97 + offset) % 26 + 97;
                if (asciiTransformedLow >= 97){
                    result.push(String.fromCharCode(asciiTransformedLow));
                } else {
                    result.push(String.fromCharCode(asciiTransformedLow + 26));
                }
            } else if (ascii >= 48 && ascii <= 57) {
                let asciiTransformedNum = (ascii - 48 + offset) % 10 + 48;
                if (asciiTransformedNum >= 48){
                    result.push(String.fromCharCode(asciiTransformedNum));
                } else {
                    result.push(String.fromCharCode(asciiTransformedNum + 10));
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
                let asciiTransformedUpp = (ascii - 65 - offset) % 26 + 65;
                if (asciiTransformedUpp >= 65){
                    result.push(String.fromCharCode(asciiTransformedUpp));
                } else {
                    result.push(String.fromCharCode(asciiTransformedUpp + 26));
                }
            } else if (ascii >= 97 && ascii <= 122){
                let asciiTransformedLow = (ascii - 97 - offset) % 26 + 97;
                if (asciiTransformedLow >= 97){
                    result.push(String.fromCharCode(asciiTransformedLow));
                } else {
                    result.push(String.fromCharCode(asciiTransformedLow + 26));
                }
            } else if (ascii >= 48 && ascii <= 57) {
                let asciiTransformedNum = (ascii - 48 - offset) % 10 + 48;
                if (asciiTransformedNum >= 48){
                    result.push(String.fromCharCode(asciiTransformedNum));
                } else {
                    result.push(String.fromCharCode(asciiTransformedNum + 10));
                }
            } else {
                result.push(string[i]); 
            } 
        } 
        let lettersJoined = result.join("");
        return lettersJoined;         
    }
}
