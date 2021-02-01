// Variables
let canvasSize = 32;
let chosenColor = 'yellow'
let penActive = false;
let canvasPart = [];

// Selectors
const canvas = document.querySelector('.canvas')
const clearButton = document.querySelector('#clearbutton')
const sliderDisplayNumber = document.querySelector('#sliderdisplay')
const colorPicker = document.querySelector('#colorpicker')

// EventListeners
clearButton.addEventListener('click', resetCanvas)
canvas.addEventListener('click', togglePen)
window.onload = createCanvasSegments(canvasSize)

// Controls 
    // Slider Input
    sliderInput = document.querySelector('#sliderinput')
    sliderInput.addEventListener('change', function() {
        console.log(sliderInput.value);
        canvasSize = sliderInput.value;
        createCanvasSegments(canvasSize)
    })
    sliderInput.addEventListener('input', function() {
        sliderDisplayNumber.innerText = sliderInput.value
    }) 

// Functions
function createCanvasSegments(canvasSize) {
    destroyCanvas()
    canvas.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`
    let numberOfParts = canvasSize * canvasSize
    for (let i = 0; i < numberOfParts; i++) {
        canvasPart[i] = document.createElement('div')
        canvasPart[i].className = 'canvas__part'
        canvas.appendChild(canvasPart[i])
    }
}

function destroyCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild)
    }
}

function resetCanvas() {
    destroyCanvas()
    createCanvasSegments(canvasSize)
}

// On/Off Pen Input (Loops through canvasPart array adding or removing eventlistener)
function togglePen() {
    if (penActive == false) {
        penActive = true; 
        canvasPart.forEach(element => {
            element.addEventListener('mouseover', paint)
        });
    } else {
        penActive = false;
        canvasPart.forEach(element => {
            element.removeEventListener('mouseover', paint)
        })
    }
}

function paint(e) {
    e.target.style.background = colorPicker.value    
}