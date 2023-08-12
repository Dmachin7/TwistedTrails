// grabbing buttons
const startButton = document.querySelector('#startButton')
const generateMaze = document.querySelector('#generateMaze')
const playAgainBtn = document.querySelector('#play-again-btn')
const continueBtn = document.querySelector('#continue-button')

  // grab image element
  const mazeImage = document.querySelector('#image')
  // grab maze canvas element
  const maze = document.querySelector('#maze')
  // canvas getcontext command
  const pen = maze.getContext('2d', {willReadFrequently: true })
  // grab message container element for later
  const msgContainer = document.querySelector('.message-container')
  // grab key obtained container for later
  const keyContainer = document.querySelector('.grabbed-key')

/**
 * This function is what generates the maze
 */
const createMaze = () => {

    // This draws the mazeImage onto the canvas
    pen.drawImage(mazeImage, 0, 0, mazeImage.width, mazeImage.height)
    
    // This gets the data from the Image to grab its Pixels
    const imageData = pen.getImageData(0, 0, mazeImage.width, mazeImage.height)

    // used to calculate the pixelSize compared to the canvas and the image size. Which allows the drawing to fit the canvas good
    const pixelSizeX = Math.floor(maze.width / mazeImage.width)
    const pixelSizeY = Math.floor(maze.height / mazeImage.height)

    // for loop to iterate over each pixel in the image and grab its RGBA values
    // the first loop is for each row or vertical pixels
    for (let y = 0; y < mazeImage.height; y++) {
    // loop to go over every column for pixels
    for (let x = 0; x < mazeImage.width; x++) {
        const index = (y * mazeImage.width + x) * 4
        const r = imageData.data[index]
        const g = imageData.data[index + 1]
        const b = imageData.data[index + 2]
        const a = imageData.data[index + 3]



        // sets the "fill style" to match the value grabbed from the for loop above
        pen.fillStyle = `rgba(${r},${g},${b},${255})`

        // this draws a rectangle for each pixel
        pen.fillRect(x * pixelSizeX, y * pixelSizeY, pixelSizeX, pixelSizeY)

    }

    // make the generateMaze button dissapear when clicked
    generateMaze.setAttribute("style","display:none;")
}
}


/**
 * This function will create the player
 */
const generatePlayer = () => {

// player object
 const player = {
    x: 0,
    y: 630,
    size: 32,
    speed: 10,
    hasKey: false
 }

// key object
const key = {
    x: 280,
    y: 250,
    size: 32
}

// initiate keyImage for placing key on canvas
const keyImage = new Image()
keyImage.src = '../Images/ashWalking.png'

/**
 * this draws the key where the x and y are with its corresponding size
 **/
const drawKey = () => {
    pen.drawImage(keyImage,key.x, key.y, key.size, key.size)
}
// this draws the image once the image is fully loaded
keyImage.onload = () => {
    drawKey()
}
// x: 1040, y: 150 is the winning position

 /**
 * rgba(241, 246, 239, 255); //white
 * rgba(0, 0, 0, 255) //black
 */

const playerImage = new Image()
playerImage.src = '../Images/ashWalking.png'

/**
 * This function is to draw the player
 */
const drawPlayer = () => {
    pen.drawImage(playerImage,player.x, player.y, player.size, player.size)
 }
 // draw player once image is fully loaded
 playerImage.onload = () => {
    drawPlayer()
 }
/**
 * This function is to move the player
 */
 const movePlayer = (dx, dy) => {
    const nextX = player.x + dx
    const nextY = player.y + dy

    // Check if the next position is within the canvas boundaries
    if (nextX >= 0 && nextX <= maze.width - player.size &&
        nextY >= 0 && nextY <= maze.height - player.size) {
        player.x = nextX
        player.y = nextY
    }
 }
 
   // this is what moves the player when using WASD
 document.addEventListener('keydown', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        movePlayer(0, -player.speed)
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        movePlayer(0, player.speed)
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        movePlayer(-player.speed, 0)
    } else if (e.key === 'd'  || e.key === 'ArrowRight') {
        movePlayer(player.speed, 0);
    }

    // Clear the canvas and redraw the maze and player
    pen.clearRect(0, 0, maze.width, maze.height)
    createMaze()
    drawKey()
    drawPlayer()
    console.log(`player is at x ${player.x} y ${player.y}`)
    
    if(player.x === 1040 && player.y === 150 && player.hasKey === true) {
        msgContainer.setAttribute("style", "display:block;")
    } else if (player.x === key.x && player.y === key.y) {
        player.hasKey = true
        key.x = 1040
        key.y = 150
        keyContainer.setAttribute('style', 'display:block;')
        console.log(`player now hasKey is ${player.hasKey}`)
    }
})}

/**
 * This function is what goes through the necessary functions to play the game
 */
const playGame = () => {
    createMaze()
    generatePlayer()
    msgContainer.setAttribute("style", "display:none;")
}

/**
 * This function is used to hide the grabbedKey container
 */
const hideMessage = () => {
 keyContainer.setAttribute("style", "display:none;")
}

// event listener on the generate maze button to start the game
generateMaze.addEventListener("click", playGame)









/**
 * Speaking literally
 * I basically need to check the current position of the player object and check if the R value is 0
 * If thats true then atWall will be turned to true
 * Maybe a switch Case ?
 */











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
//}