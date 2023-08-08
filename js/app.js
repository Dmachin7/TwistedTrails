// grab the startGame button
const startButton = document.querySelector('#startButton')
const startButtonfr = document.querySelector('#startButtonfr')
const generateMaze = document.querySelector('#generateMaze')
// Create class for players
class Player {
    constructor(name) {
        this.name = name
        this.health = 100
        this.hitpoints = 10
        this.speed = 5
    }
    gainSpeed() {
        this.speed += 1
    }
}


//grab some statsContainer divs
const statsContainer = document.querySelector("#PlayerNames")
const statsTitle = document.querySelector('#statsTitle')

// create blank variables
let newPlayer
let newPlayer2

// function to create new player's using user input
// const startGame = () => {
//     const player1input = document.querySelector("#player1name")
//     const player1Name = player1input.value
//     const player2input = document.querySelector('#player2name')
//     const player2Name = player2input.value
    
//     if(player1Name === "" || player2Name === "") {
//         alert("Please enter a valid player name")
//         return
//     }
//     newPlayer = new Player(`${player1Name}`)
//     newPlayer2 = new Player(`${player2Name}`)

//     console.log(`${newPlayer.name}`)

// }


const createMaze = () => {
   for(let i = 0; i < 63; i++) {
    const newLine = document.createElement('div')
    newLine.classList.add('makeMaze')
    const mazeDiv = document.querySelector('.maze-container')
    mazeDiv.appendChild(newLine)
}
}

const startGame = () => {

    const player1input = document.querySelector("#player1name")
    const player1Name = player1input.value
    const player2input = document.querySelector('#player2name')
    const player2Name = player2input.value
    
    if(player1Name === "" || player2Name === "") {
        alert("Please enter a valid player name")
        return
    }
    newPlayer = new Player(`${player1Name}`)
    newPlayer2 = new Player(`${player2Name}`)

    console.log(`Player 1's name is ${newPlayer.name}`)
    console.log(`Player 2's name is ${player2Name}`)


}

// startButtonfr.addEventListener("click", startGame)
generateMaze.addEventListener("click", createMaze)
