// grabbing buttons
const startButton = document.querySelector('#startButton')
const generateMaze = document.querySelector('#generateMaze')


  // grab image element
  const mazeImage = document.querySelector('#image')
  // grab maze canvas element
  const maze = document.querySelector('#maze')
  // canvas getcontext command
  const pen = maze.getContext('2d')

/**
 * This function is what generates the maze
 */
const createMaze = () => {

    // This draws the mazeImage onto the canvas
    pen.drawImage(image, 0, 0, mazeImage.width, mazeImage.height)
    
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
//}