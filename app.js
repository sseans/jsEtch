// Variables
let canvasSize = 32;
let chosenColor = 'yellow'

// Selectors
const canvas = document.querySelector('.canvas')

// Functions
function createCanvasSegments() {
    for (let i = 0; i < canvasSize; i++) {
        for (let i = 0; i < canvasSize; i++) {
            const canvasPart = document.createElement('div')
            canvasPart.className = 'canvas__part'
            canvas.appendChild(canvasPart)

            let cssrule = calculatePartSize(canvasPart, canvasSize)
            addEventlistenerToPart(canvasPart, cssrule)
        }
    }  
}

function calculatePartSize(component, desiredSize) {
    let widthHeight = 100 / desiredSize   
    component.style.cssText=`height: ${widthHeight}%; width: ${widthHeight}%;`
    return cssText = `height: ${widthHeight}%; width: ${widthHeight}%;`;
}

function addEventlistenerToPart(canvasPart, cssrule) {
    canvasPart.addEventListener('mouseover', function() {
        canvasPart.style.cssText=`background-color: ${chosenColor}; ${cssrule}`
    })
}

createCanvasSegments()
