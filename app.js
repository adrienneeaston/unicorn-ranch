'use strict'

let herd = [];
let list = document.getElementsByTagName('ul')[0];

function Unicorn(name, color, food, location) {
  this.name = name,
  this.color = color,
  this.food = food,
  this.location = location
  herd.push(this);
}

function displayUnicorn(obj, index) {
  let el = document.getElementsByTagName('ul')[0];
  let newEl = document.createElement('li');

  for(let property in obj) {
    let description = document.createElement('h3');
    description.textContent = property + ': ' + obj[property];
    newEl.appendChild(description);
  };

  let update = document.createElement('h4');
  update.textContent = 'UPDATE LOCATION:';
  newEl.appendChild(update);

  let inputBarn = document.createElement('input');
  let labelBarn = document.createElement('label');
  labelBarn.textContent = 'Barn';
  inputBarn.setAttribute('type', 'radio');
  inputBarn.setAttribute('name', index + 'location');
  inputBarn.setAttribute('id', index + 'barn');
  inputBarn.setAttribute('class', index.toString());
  inputBarn.setAttribute('value', 'barn');
  labelBarn.setAttribute('for', 'barn');
  newEl.appendChild(inputBarn);
  newEl.appendChild(labelBarn);

  let inputPasture = document.createElement('input');
  let labelPasture = document.createElement('label');
  labelPasture.textContent = 'Pasture';
  inputPasture.setAttribute('type', 'radio');
  inputPasture.setAttribute('name', index + 'location');
  inputPasture.setAttribute('id', index + 'pasture');
  inputPasture.setAttribute('class', index.toString());
  inputPasture.setAttribute('value', 'pasture');
  labelPasture.setAttribute('for', 'pasture');
  newEl.appendChild(inputPasture);
  newEl.appendChild(labelPasture);

  let inputTrail = document.createElement('input');
  let labelTrail = document.createElement('label');
  labelTrail.textContent = 'Trail';
  inputTrail.setAttribute('type', 'radio');
  inputTrail.setAttribute('name', index + 'location');
  inputTrail.setAttribute('id', index + 'trail');
  inputTrail.setAttribute('class', index.toString());
  inputTrail.setAttribute('value', 'trail');
  labelTrail.setAttribute('for', 'trail');
  newEl.appendChild(inputTrail);
  newEl.appendChild(labelTrail);

  el.appendChild(newEl);

  checkRadioBox(index);
}

function checkRadioBox(index) {
  let inputID = document.getElementById(index + herd[index].location);
  inputID.checked = true;
}

function displayHerd(arr) {
  for(let i = 0; i < arr.length; i++) {
    displayUnicorn(arr[i], i);
  }
  localStorage.setItem('key', JSON.stringify(herd));
}

function handleUpdateLocation(event) {
  event.preventDefault();
  let index = parseInt(event.target.className);
  herd[index].location = event.target.value;
  list.textContent = "";
  displayHerd(herd);
}

function checkLocalStorage() {
  if(localStorage.getItem('key') === null) {
    new Unicorn("Rainbow", "multi", "icecream", "pasture");
    new Unicorn("Sparkle", "white", "steak", "trail");
    new Unicorn("Lightning", "gray", "catfood", "barn");
    new Unicorn("Bob", "multi", "icecream", "pasture");
    new Unicorn("Starlight", "white", "steak", "trail");
    new Unicorn("Narwhal", "gray", "catfood", "barn");
    new Unicorn("Ezio", "black", "icecream", "pasture");
    new Unicorn("Kassandra", "white", "steak", "trail");
    new Unicorn("Sarah", "brown", "catfood", "barn");
    new Unicorn("Fido", "green", "icecream", "pasture");
    new Unicorn("Spike", "pink", "steak", "trail");
    new Unicorn("Ruby", "red", "catfood", "barn");
  } else {
    herd = JSON.parse(localStorage.getItem('key'));
  }
}

list.addEventListener('change', handleUpdateLocation)

checkLocalStorage();
displayHerd(herd);





