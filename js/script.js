const field = document.querySelector('.game-background');
const menu = document.querySelector('.menu');
const allLevel = document.querySelectorAll('.level');
const start = document.querySelector('.start-game');
const gridContainer = document.createElement('div');

let cards = 3;
let random = value => (Math.floor(Math.random() * value));
let cardClick = null;
let openCard = null;

/* document.body.style.overflow = 'hidden'; */

function chooseLevel(e) {
  allLevel.forEach(item => item.classList.remove('active'));
  e.currentTarget.classList.add('active');

  let selectLevel = document.querySelector(".active");

  switch (selectLevel.id) {
      case "easy":
          cards = 3;
          break;          

      case "medium":
          cards = 6;
          break;

      case "hard":
          cards = 10;
          break;
  }
}

allLevel.forEach((item) => item.addEventListener('click', chooseLevel));

function createField() {
  let randomValue = random(cards);

  for (let i = 0; i < cards; i++) {
    const boxCard = document.createElement('div');
    boxCard.classList.add('card');
    gridContainer.prepend(boxCard);
    if (i === randomValue) {
      boxCard.innerHTML = `
      <div class="card-front"></div>
      <div class="bug"></div>
    `;
    } else {
      boxCard.innerHTML = `
      <div class="card-front"></div>
      <div class="card-back"></div>
    `;
    }
  }

  field.prepend(gridContainer);

  switch (cards) {
    case 3:
      gridContainer.classList.toggle("grid-easy");
      break;
    case 6:
      gridContainer.classList.toggle("grid-medium");
      break;
   case 10:
      gridContainer.classList.toggle("grid-hard");
      break;
  }
}

start.addEventListener('click', () => {
  menu.classList.add('hidden');
  createField();

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (e) => {
      cardClick++;
      if (cardClick < 2) {
        e.target.parentElement.classList.add('card-click');
      } else {
        window.location.reload();
      }
    });
  });
});
