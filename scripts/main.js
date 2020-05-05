let myImage = document.querySelector ('img');

myImage.onclick = function () {mySrc = myImage.getAttribute ('src');
    if (mySrc ==='images/capa.jpg'){
        myImage.setAttribute ('src', 'images/kyojuro.jpg');
    } else {
        myImage.setAttribute ('src', 'images/capa.jpg');
    }
}
// Isso faz com que ao tocar na imagem da capa, ela altera para outra imagem, clicando pela segunda vez, volta a primeira.
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h4');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  
