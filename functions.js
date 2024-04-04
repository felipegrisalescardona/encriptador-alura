// Declaración de variables
let catchedInput = document.querySelector(".inputText");
let buttonEncrypt = document.querySelector(".butEncrypt");
let buttonDeencrypt = document.querySelector(".butDencrypt");
let buttonCopy = document.querySelector("#copyButton");
let shibaImage = document.querySelector(".shibaImg");
let titleDisplay = document.querySelector(".titleDisplay");
let resultField = document.querySelector(".resultField");
// Declaración de funciones
function splitString() {
  let newone = catchedInput.value.split(" ");
  return newone;
}
function addLetters(message) {
  let finalMessage = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] == "a") {
      finalMessage += "ai";
    } else if (message[i] == "e") {
      finalMessage += "enter";
    } else if (message[i] == "i") {
      finalMessage += "imes";
    } else if (message[i] == "o") {
      finalMessage += "ober";
    } else if (message[i] == "u") {
      finalMessage += "ufat";
    } else {
      finalMessage += message[i];
    }
  }
  console.log(finalMessage);
  return finalMessage;
}
function removeLetters(message) {
  let finalMessage = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] == "a") {
      finalMessage += "a";
      i += 1;
    } else if (message[i] == "e") {
      finalMessage += "e";
      i += 4;
    } else if (message[i] == "i") {
      finalMessage += "i";
      i += 3;
    } else if (message[i] == "o") {
      finalMessage += "o";
      i += 3;
    } else if (message[i] == "u") {
      finalMessage += "u";
      i += 3;
    } else {
      finalMessage += message[i];
    }
  }
  console.log(finalMessage);
  return finalMessage;
}
function encriptadoTotal() {
  let newtext = addLetters(catchedInput.value);
  console.log(newtext);
  shibaImage.classList.add("hiding");
  titleDisplay.classList.add("hiding");
  resultField.classList.add("repadding");
  resultField.innerHTML = newtext;
  buttonCopy.classList.remove("hiding");
}
function encriptadoTotal() {
  let newtext = addLetters(catchedInput.value);
  console.log(newtext);
  shibaImage.classList.add("hiding");
  titleDisplay.classList.add("hiding");
  resultField.classList.add("repadding");
  resultField.innerHTML = newtext;
  buttonCopy.classList.remove("hiding");
}
function desencriptadoTotal() {
  let newtext = removeLetters(catchedInput.value);
  console.log(newtext);
  shibaImage.classList.add("hiding");
  titleDisplay.classList.add("hiding");
  resultField.classList.add("repadding");
  resultField.innerHTML = newtext;
  buttonCopy.classList.remove("hiding");
}
function copyTextToClipboard() {
  navigator.clipboard.writeText(resultField.innerHTML);
}
buttonEncrypt.addEventListener("click", encriptadoTotal);
buttonDeencrypt.addEventListener("click", desencriptadoTotal);
buttonCopy.addEventListener("click", copyTextToClipboard);
