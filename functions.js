// Declaración de variables
let catchedInput = document.querySelector(".inputText");
let buttonEncrypt = document.querySelector(".butEncrypt");
let buttonDeencrypt = document.querySelector(".butDencrypt");
let buttonCopy = document.querySelector("#copyButton");
// Declaración de funciones
function splitString() {
  let newone = catchedInput.value.split(" ");
  return newone;
}
function addLetters(message) {
  for (let i = 0; i < message.length; i++) {
    let additive = "";
    if (message[i].charAt(message[i].length - 1) == "a") {
      additive = "ai";
    } else if (message[i].charAt(message[i].length - 1) == "e") {
      additive = "enter";
    } else if (message[i].charAt(message[i].length - 1) == "i") {
      additive = "imes";
    } else if (message[i].charAt(message[i].length - 1) == "o") {
      additive = "ober";
    } else if (message[i].charAt(message[i].length - 1) == "u") {
      additive = "ufat";
    }
    message[i] += additive;
  }
  console.log(message);
  return message;
}
function allAtOnce() {
  let newtext = addLetters(splitString());
  newtext = newtext.join(" ");
  console.log(newtext);
}
buttonEncrypt.addEventListener("click", allAtOnce);
