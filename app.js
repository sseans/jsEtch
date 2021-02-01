// Variables
let canvasSize = 16;
let chosenColor = 'yellow'
let penActive = false;
let canvasPart = [];

// Selectors
const canvas = document.querySelector('.canvas')
const clearButton = document.querySelector('#clearbutton')

// EventListeners
clearButton.addEventListener('click', resetCanvas)
canvas.addEventListener('click', togglePen)

// Controls 
// Slider Input
sliderInput = document.querySelector('#sliderinput')
sliderInput.addEventListener('change', function() {
    console.log(sliderInput.value);
    canvasSize = sliderInput.value;
    createCanvasSegments(canvasSize)
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

function togglePen() {
    if (penActive == false) {
        penActive = true; 
        canvasPart.forEach(element => {
            element.addEventListener('mouseover', paint())
        });
    } else {
        penActive = false;
        canvasPart.forEach(element => {
            element.removeEventListener('mouseover', paint())
        })
    }
}

function paint() {

}
































//     // loops through creating canvas elements based on desired canvas size
//     for (let i = 0; i < canvasSize; i++) {
//         for (let i = 0; i < canvasSize; i++) {
//             // creates canvas elements & appends
//             canvasPart = document.createElement('div')
//             canvasPart.className = 'canvas__part'
//             canvas.appendChild(canvasPart)
//             // changes the size of the elements & adds the mouseover listener
//             let cssWidthHeight = calculatePartSize(canvasPart, canvasSize)
//             addEventlistenerToPart(canvasPart, cssWidthHeight)
//         }
//     }  
// }

// function calculatePartSize(component, desiredSize) {
//     let widthHeight = 100 / desiredSize
//     let cssSizeStyling = `height: ${widthHeight}%; width: ${widthHeight}%;`;  
//     component.style.cssText = cssSizeStyling
//     return cssSizeStyling
// }

// function addEventlistenerToPart(canvasPart, cssWidthHeight) {
//     canvasPart.addEventListener('mouseover', function() {
//         canvasPart.style.cssText=`background-color: ${chosenColor}; ${cssWidthHeight}`
//     })
    
// }

// function togglePen() {
//     if (penActive == false) {
//         addEventlistenerToPart()
//     }
    
// }

// createCanvasSegments()
