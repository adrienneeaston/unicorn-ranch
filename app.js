'use strict'

function test() {
  console.log("Hello!");
}

test();

let herd = [];

function Unicorn(name, color, food, location) {
  this.name = name,
  this.color = color,
  this.food = food,
  this.location = location
  herd.push(this);
}

function displayUnicorn(obj) {
  let el = document.getElementsByTagName('ul')[0];
  let newEl = document.createElement('li');

  for(let property in obj) {
    let description = document.createElement('h3');
    description.textContent = property.toUpperCase() + ': ' + obj[property];
    newEl.appendChild(description);
  };
  
  let inputBarn = document.createElement('input');
  let labelBarn = document.createElement('label');
  labelBarn.textContent = 'Barn';
  inputBarn.setAttribute('type', 'radio');
  inputBarn.setAttribute('name', 'location');
  inputBarn.setAttribute('id', obj[name] + 'barn');
  inputBarn.setAttribute('value', 'barn');
  labelBarn.setAttribute('for', 'barn');
  newEl.appendChild(inputBarn);
  newEl.appendChild(labelBarn);
  console.log(obj[name] + 'barn');

  let inputPasture = document.createElement('input');
  let labelPasture = document.createElement('label');
  labelPasture.textContent = 'Pasture';
  inputPasture.setAttribute('type', 'radio');
  inputPasture.setAttribute('name', 'location');
  inputPasture.setAttribute('id', obj[name] + 'pasture');
  inputPasture.setAttribute('value', 'pasture');
  labelPasture.setAttribute('for', 'pasture');
  newEl.appendChild(inputPasture);
  newEl.appendChild(labelPasture);

  let inputTrail = document.createElement('input');
  let labelTrail = document.createElement('label');
  labelTrail.textContent = 'Trail';
  inputTrail.setAttribute('type', 'radio');
  inputTrail.setAttribute('name', 'location');
  inputTrail.setAttribute('id', obj[name] + 'trail');
  inputTrail.setAttribute('value', 'trail');
  labelTrail.setAttribute('for', 'trail');
  newEl.appendChild(inputTrail);
  newEl.appendChild(labelTrail);

  el.appendChild(newEl);
}

function displayHerd(arr) {
  for(let i = 0; i < arr.length; i++) {
    displayUnicorn(arr[i]);
  }
}

let list = document.getElementsByTagName('ul')[0];

function updateLocation(event) {
  event.preventDefault();
  console.log(event);
}

list.addEventListener('change', updateLocation)



new Unicorn("Rainbow", "multicolored", "icecream", "pasture");
// new Unicorn("Sparkle", "white", "steak", "trail");
// new Unicorn("Lightning", "gray", "catfood", "barn");
// new Unicorn("Bob", "multicolored", "icecream", "pasture");
// new Unicorn("Starlight", "white", "steak", "trail");
// new Unicorn("Narwal", "gray", "catfood", "barn");
// new Unicorn("Ezio", "black", "icecream", "pasture");
// new Unicorn("Kassandra", "white", "steak", "trail");
// new Unicorn("Sarah", "brown", "catfood", "barn");
// new Unicorn("Fido", "multicolored", "icecream", "pasture");
// new Unicorn("Spike", "pink", "steak", "trail");
// new Unicorn("Ruby", "red", "catfood", "barn");
console.log(herd);

displayHerd(herd);



