let selected = []

function createBoard(size) {
  // let iconos = getIconsList()
  selected = []
  let board = document.getElementById("board")
  let cards = []
  for (let i = 0; i < size; i+=2) {
    for (let rep = 0; rep < 2; rep++) {
      cards.push(`
        <div class="card" id="card${i+rep}" onclick="selectCard(${i+rep})">
          <div class="front-card back-card" id="back${i+rep}">
            ${i}
          </div>
          <div class="front-card superior">
            ❓
          </div>
        </div>
      `)
    }
  }
  cards.sort(() => Math.random() - 0.5)
  board.innerHTML = cards.join("")
}

function selectCard(i) {
  let card = document.getElementById("card" + i)
  if (card.style.transform != "rotateY(180deg)") {
    card.style.transform = "rotateY(180deg)"
    selected.push(i)
  }
  if (selected.length == 2) {
    deselection(selected)
    selected = []
  }
}

function deselection(selected) {
  setTimeout(() => {
    let back1 = document.getElementById("back" + selected[0])
    let back2 = document.getElementById("back" + selected[1])
    if (back1.innerHTML != back2.innerHTML) {
      let card1 = document.getElementById("card" + selected[0])
      let card2 = document.getElementById("card" + selected[1])
      card1.style.transform = "rotateY(0deg)"
      card2.style.transform = "rotateY(0deg)"
    } else {
      back1.style.background = "plum"
      back2.style.background = "plum"
    }
  }, 1000);
}