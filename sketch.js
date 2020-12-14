const CRYSTAL_SIZE = 150
const SIDES = 6
let PALETTE = []

ALL_CRYSTALS = []

const MARGIN = CRYSTAL_SIZE / 2
const COLUMNS = 6
const ROWS = 3
const PADDING = CRYSTAL_SIZE * 0.4
const GRIDBOX = CRYSTAL_SIZE + PADDING
const START = CRYSTAL_SIZE / 2 + MARGIN

// test
// console.log(hexToRgb(document.getElementById("cp1").value))


document.getElementById("begin").onclick = draw
// const layers = []

function setup() {
	const totalX =  START + GRIDBOX * COLUMNS
	const totalY =   START + GRIDBOX * ROWS - 100

  createCanvas(totalX, totalY, SVG)

  PALETTE = [
    // color(30, 55, 231),
    // color(12, 231, 0) // blue
  ]

 noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)


}

function draw() {
  clear()
  for (let x = 0; x < COLUMNS; x++){
  	for (let y = 0; y < ROWS; y++){
  		const posX =  START +(x * GRIDBOX)
  		const posY =  START +(y * GRIDBOX)
  		ALL_CRYSTALS.push(new Crystal(posX, posY))
  	}
  }

  ALL_CRYSTALS.forEach(crystal =>{
  	crystal.render()
  })
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('pattern', 'png');
  }
}

















