let activeColor = '';
let tileClass = '';
let counter = '';
let winner = document.getElementById('start')

let pickers = document.querySelectorAll('.picker');
let gamePieces = document.querySelectorAll('.game');
let counterMax = gamePieces.length;

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
  winner.innerHTML = '<a target = "_blank" href = "https://www.espn.com" >You did it! Reveal the surprise!</a>';
  winner.style.backgroundColor = 'lightblue';
  winner.style.borderRadius = '20px';
};

/* reveals the color of the tile if it matches the color picker */
var revealCell = function(){
  tileClass = this.className;
  (colorMatches(tileClass)) ? ($(this).removeClass('start'), counter++) : false;
  (counter == counterMax) ? revealWinner() : false;
};

/* applies the event listener to each color picker */
pickers.forEach(function(elem) {
  elem.addEventListener('mouseover', colorPicker);
})

/* applies the event listener to each game piece */
gamePieces.forEach(function(elem) { 
  elem.addEventListener('click', revealCell);
});



