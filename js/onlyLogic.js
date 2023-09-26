// import { disableInputs, enableInputs, showValues, resetConsole, startInput } from "./viewFunctions.js";

startInput(getData);

// const choiceUser = { numId1: 0, numId2: 0 };
const TOTAL_CARDS = 16
const board = createBoard(TOTAL_CARDS);
console.log(board);
showValues(board);


function createBoard(size) {
  enableInputs();
  let cards = [];
  for (let i = 0; i < size; i += 2) {
    for (let rep = 0; rep < 2; rep++) {
      cards.push({
        data: i,
        found: false,
      })
    }
  }
  cards.sort(() => Math.random() - 0.5)
  return cards;
}


function getData() {
  let select1 = Number(document.getElementById("input1").value);
  let select2 = Number(document.getElementById("input2").value);
  checkMatch(select1, select2);
}

function win() {
  const bool = board.every((element) => element.found === true);
  console.log({ bool });
  showValues({ bool })
  return bool
}

function checkMatch(num1, num2) {

  console.log(board);
  showValues(board)
  let foundData1 = findDataOnTheBoard(board, num1);
  let foundData2 = findDataOnTheBoard(board, num2)
  console.log({ foundData1, foundData2 });
  if (foundData1.data === foundData2.data) {
    foundData1.found = true;
    foundData2.found = true;
    if (win()) {
      disableInputs();
      console.log("Ganaste");

    }
  }
}

function findDataOnTheBoard(board, data) {
  let foundElement = board.find((element, index) => index === data);
  return foundElement;
}




















function getDataPrompt() {
  let number1 = Number(prompt("Ingrese id tarjeta 1"))
  let number2 = Number(prompt("Ingrese id tarjeta 2"))

  return { numId1: number1, numId2: number2 }
}












// initGame();

function initGame() {
  const TOTAL_CARDS = 16
  let restHits = TOTAL_CARDS / 2;
  const board = createBoard(TOTAL_CARDS);
  console.log(board);
  if (restHits > 0) {
    console.log({ restHits });
    console.log(board);
    // const choiceUser = getData();
    console.log(choiceUser);
    let foundData = findDataOnTheBoard(board, choiceUser)
    console.log(foundData);
    if (foundData.foundElement1.data == foundData.foundElement2.data) {
      foundData.foundElement1.found = true;
      foundData.foundElement2.found = true;
      restHits--;
    }
    else {
      console.log("Ganaste");
    }
    restHits--;
  }
}