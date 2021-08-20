const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const openParam = urlParams.get('open')

const openDate = new Date('August 26, 2021 21:00:00');
const testDate = new Date('August 26, 1999 21:00:00');
let isOpen = openParam;
console.log(isOpen);
console.log(openDate);
console.log(testDate);
console.log(Date.now());
console.log(openDate > Date.now());
console.log(testDate > Date.now());

const maskRedirect = () => {
  console.log('fire 1');
  if (isOpen || openDate > Date.now() || testDate > Date.now()) { return; };
  console.log('fire 2');
  window.location = 'https://brianagibson.github.io/projects/surprise/mask.html';
};

let activeColor = '';
let tileClass = '';
let counter = '';
let isClicked = false;
let winner = document.getElementById('start')

let pickers = document.querySelectorAll('.picker');
let gamePieces = document.querySelectorAll('.game');
let counterMax = gamePieces.length;

const draggingEnabled = () => {
  isClicked = true;
};

const draggingDisabled = () => {
  isClicked = false;
};

/* selects the active color picker */
const colorPicker = () => {
  $('.picker').click(function(){
      activeColor = this.id;
      $('.picker').removeClass('active');
      $(this).addClass('active');
  });
};

/* determines whether the color picker and the color of the game piece selected match */
const colorMatches = (tileClass) => {
  return ((activeColor.includes('white') & tileClass.includes('white')) || 
      (activeColor.includes('green') & tileClass.includes('green')) ||
      (activeColor.includes('red') & tileClass.includes('red')) ||
      (activeColor.includes('blue') & tileClass.includes('blue')) ||
      (activeColor.includes('gray') & tileClass.includes('gray'))) ? true : false;
};

/* unlocks the next steps when the game is won */
/* TODO: make the whole div clickable */
const revealWinner = () => {
  winner.innerHTML = '<a target = "_blank" href = "https://docs.google.com/presentation/d/1yOuuIOoNE881A3THk0WashR1KyOeqbO4eWZMiRz4x-A/present?usp=sharing" >You did it! Reveal the surprise!</a>';
  winner.style.backgroundColor = 'lightblue';
  winner.style.borderRadius = '20px';
};

/* reveals the color of the tile when clicked */
var revealCell = function(){
  tileClass = this.className;
  (colorMatches(tileClass) & tileClass.includes('start')) ? ($(this).removeClass('start'), counter++) : false;
  (counter == counterMax) ? revealWinner() : false;
};

/* reveals the color of the tile when clicked and over */
var slideRevealCell = function(){
  if (isClicked === false) { return; };
  tileClass = this.className;
  (colorMatches(tileClass) & tileClass.includes('start')) ? ($(this).removeClass('start'), counter++) : false;
  (counter == counterMax) ? revealWinner() : false;
};

/* applies the event listener to each color picker */
pickers.forEach(function(elem) {
  elem.addEventListener('mouseover', colorPicker);
})

/* applies the event listener to each game piece */
gamePieces.forEach(function(elem) { 
  elem.addEventListener('mousedown', revealCell);
  elem.addEventListener('mouseenter', slideRevealCell);
});

gameArea.addEventListener('mousedown', draggingEnabled);
gameArea.addEventListener('mouseup', draggingDisabled);

window.onload = maskRedirect;