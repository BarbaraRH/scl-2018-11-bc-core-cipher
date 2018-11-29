window.cipher = {
    encode: (offset, string) => {
      /* Acá va tu código */
        let result = "";

        for (let i = 0; i < string.length; i++){
            if (string[i] === " "){
                result = result + " ";
            } else {
                result = result + (String.fromCharCode((string.charCodeAt(i) - 65 + offset) % 26 + 65));
            }        
        }
        return result
    },
    decode: (offset, string) => {

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
    decode: (offset, string) => {

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
      document.getElementById("result").innerHTML = "Mensaje descifrado: " + lettersJoined;
    }
  };

 */

