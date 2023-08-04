// grab the startGame button
const startButton = document.querySelector('#startButton')

const startButtonfr = document.querySelector('#startButtonfr')
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


//grab the container div
const setupContainer = document.querySelector(".setup-container")

const confirmPlayers = () => {
    setupContainer.innerHTML = " "
    const playerStatsTitle = document.createElement('h1')
    playerStatsTitle.innerHTML = "Player Stats"
}

// function to create new player's using user input
const createPlayer = () => {
    const player1input = document.querySelector("#player1name")
    const player1Name = player1input.value
    const player2input = document.querySelector('#player2name')
    const player2Name = player2input.value
    
    if(player1Name === "" || player2Name === "") {
        alert("Please enter a valid player name")
        return
    }
    const newPlayer = new Player(`${player1Name}`)
    const newPlayer2 = new Player(`${player2Name}`)
   
}

//event listener for start button
startButtonfr.addEventListener("click", createPlayer)