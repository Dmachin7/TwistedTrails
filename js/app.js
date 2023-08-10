// grabbing buttons
const startButton = document.querySelector('#startButton')
const generateMaze = document.querySelector('#generateMaze')

// grab image element
const mazeImage = document.querySelector('#mazeImage')

/**
 * This function is what generates the maze
 */
const createMaze = () => {
    const maze = document.querySelector('#maze')
    const pen = maze.getContext('2d')

    pen.strokeStyle = 'black'
    pen.lineWidth = 5

    pen.beginPath();
    pen.moveTo(100, 60);
    pen.lineTo(950, 60);
    pen.moveTo(80, 150);
    pen.lineTo(80, 640);
    pen.moveTo(80, 640);
    pen.lineTo(1000, 640);
    pen.moveTo(1000, 570);
    pen.lineTo(1000, 80);
    pen.stroke();
    
generateMaze.setAttribute("style","display:none;")
}


generateMaze.addEventListener("click", createMaze)





















// All of the functions I made before changing direction to do MVP goals instead, will be able to use these eventually most likely 

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

//For createMaze function

//    for(let i = 0; i < 5; i++) {
//     const newRow = document.createElement('div')
//     newRow.classList.add('row')
//     const mazeDiv = document.querySelector('.maze-container')
//     mazeDiv.appendChild(newRow)
//    }
//     for(let i = 0; i < 5; i++) {
//         const newColumn = document.createElement('div')
//         newColumn.classList.add('column')
//         const mazeDiv = document.querySelector('.maze-container')
//         mazeDiv.appendChild(newColumn)

// Create class for players
// class Player {
//     constructor(name) {
//         this.name = name
//         this.health = 100
//         this.hitpoints = 10
//         this.speed = 5
//     }
//     gainSpeed() {
//         this.speed += 1
//     }
// }

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

//     console.log(`Player 1's name is ${newPlayer.name}`)
//     console.log(`Player 2's name is ${player2Name}`)


// }
