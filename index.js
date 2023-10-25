// Write your code here!

const sector = document.getElementById("main");
sector.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

newHeader.textContent = "Mark is the champion";

document.body.append(newHeader);