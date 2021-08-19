let activeColor = '';
let tileClass = '';
let counter = '';
const winner = document.getElementById('start')

let graPicker = document.getElementById('grayPicker');
let wPicker = document.getElementById('whitePicker');
let bPicker = document.getElementById('bluePicker');
let rPicker = document.getElementById('redPicker');
let grePicker = document.getElementById('greenPicker');

/* activeColor and tileClass need to be populated BEFORE the function */
const colorPicker = () => {
              console.log('2. fire colorPicker.js');
              console.log('3. '+this.id+' = colorPicker this.id outside td.picker');
              console.log('4. '+activeColor+' = colorPicker activeColor outside td.picker');
  $('td.picker').click(function(e){
              console.log('8. '+this.id+' = colorPicker this.id inside td.picker');
              console.log('9. '+activeColor+' = colorPicker activeColor inside td.picker');
    activeColor = this.id;
              console.log('10. '+this.id+' = colorPicker this.id after activeColor');
              console.log('11. '+activeColor+' = colorPicker after activeColor'); 
      $('td').removeClass('active');
      $(this).addClass('active');
  });
};

/* bad code
const togCell = () => {
  $('td.start').click(function(e){
      tileClass = this.className;
      (colorMatches(tileClass)) ? ($(this).removeClass('start'), counter++) : false;
      revealWinner();
  }); 
};

let gameTile = document.getElementById('test');

gameTile.onclick = () => {
  togCell()
};
*/

const colorMatches = (tileClass) => {
  console.log('7. fire colorMatches');
  return ((activeColor === 'whitePicker' & tileClass === 'box game white start') || 
      (activeColor === 'greenPicker' & tileClass === 'box game green start') ||
      (activeColor === 'redPicker' & tileClass === 'box game red start') ||
      (activeColor === 'bluePicker' & tileClass === 'box game blue start') ||
      (activeColor === 'grayPicker' & tileClass === 'box game gray start')) ? true : false;
};

const revealWinner = () => {
  (counter == 225) ? winner.innerHTML = 'Win!': false;
};

graPicker.onclick = () => {
  colorPicker();
};

wPicker.onclick = () => {
  colorPicker();
};

bPicker.onclick = () => {
  colorPicker();
};

rPicker.onclick = () => {
  colorPicker();
};

grePicker.onclick = () => {
  colorPicker();
};

/*
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';
let currentlyPlaying = true;
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

const isBot = (door) => {
  return (door.src === botDoorPath) ? true : false;
};

const isClicked = (door) => {
  return (door.src === closedDoorPath) ? false : true;
};

const playDoor = (door) => {
  numClosedDoors = numClosedDoors-1;
  if (numClosedDoors === 0) { 
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
};

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) { 
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  };
};

doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) { 
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  };
};

doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) { 
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};

startButton.onclick = () => {
  if (!currentlyPlaying) { startRound(); }
};

startButton.onmouseover = () => {
  if (currentlyPlaying) { 
    startButton.innerHTML = 'You\'re not done. Keep playing!' 
  }
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over... Play again?';
  };
  currentlyPlaying = false;
};

const startRound = () => {
  numClosedDoors = 3;
  currentlyPlaying = true;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!'
  randomChoreDoorGenerator();
};

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  };
};

startRound();


*/
