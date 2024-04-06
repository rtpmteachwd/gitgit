import { toggleHiddenElement, changeToFunkyColor } from "../modules/dom-function.js";

const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
  changeToFunkyColor(buttonElement)
});

















function changeText(domElement, newText) {
    domElement.innerHTML = newText;
  }
  
  function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
  
    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
  }