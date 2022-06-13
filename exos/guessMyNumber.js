// Game rules
const max = 100;
const target = Math.floor((Math.random() * max));
// const target = 4;
const chances = 5;
let totalGuess = 0;

console.log(`From 1 to ${max}, number to guess : ${target}`);

const findMiddle = (l, r) => Math.floor((l + r) / 2);

function guessMyNumberGame() {
  let found = false;
  let left = 0;
  let right = max;
  let middle = findMiddle(left, right);
  
  while (totalGuess < chances || found) {
    totalGuess++;
    console.log(`Guess n°${totalGuess} : ${middle}`);
    if (middle === target) {
      found = true;
      break;
    }
    if (middle > target) { // [---- tgt ---- guess ----]
      console.log(`Smaller ↓`);
      right = middle;       //  l         r           
      middle = findMiddle(left, right);
      continue;
    }
    if (middle < target) { // [---- guess ----- tgt ----]
      console.log(`Higher ↑`);
      left = middle;      //                l         r
      middle = findMiddle(left, right);
      continue;
    }
  }

  return found;

}

let msg = guessMyNumberGame() ? `Found in ${totalGuess} guess${totalGuess > 1 ? 'es' : ''} : YOU WIN !` : '--- GAME OVER ---';

console.log(msg);